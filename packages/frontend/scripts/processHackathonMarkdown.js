const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const markdownDirectory = path.join(process.cwd(), "src/hackathons");
const outputDirectory = path.join(process.cwd(), "public/data/hackathons");

const collectMdxFiles = (dir, relativePath = "") => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(
        collectMdxFiles(fullPath, path.join(relativePath, file)),
      );
    } else if (file.endsWith(".mdx")) {
      results.push({ fullPath, relativePath: path.join(relativePath, file) });
    }
  });
  return results;
};

const processHackathonMarkdownFiles = async () => {
  const filePaths = collectMdxFiles(markdownDirectory);
  const serialize = (await import("next-mdx-remote/serialize")).serialize;
  const remarkGfm = (await import("remark-gfm")).default;

  const allHackathonDataPromises = filePaths.map(
    async ({ fullPath, relativePath }) => {
      const id = relativePath.replace(/\.mdx$/, "").replace(/\//g, "_");

      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);
      const mdxSource = await serialize(content, {
        mdxOptions: {
          development: "development" === process.env.NODE_ENV,
          // development: true,
          remarkPlugins: [remarkGfm],
        },
      });

      if (!data.title) {
        return null;
      }

      const hackathonData = {
        id,
        ...data,
        content: mdxSource,
      };

      const outputDir = path.join(outputDirectory, path.dirname(relativePath));
      const individualOutputPath = path.join(outputDir, `${id}.json`);

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      fs.writeFileSync(
        individualOutputPath,
        JSON.stringify(hackathonData, null, 2),
      ); // Pretty print JSON

      return hackathonData;
    },
  );

  const allHackathonData = await Promise.all(allHackathonDataPromises);

  const markdownData = allHackathonData
    .filter((data) => data)
    .sort(({ index: a }, { index: b }) => {
      return a - b;
    });

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  fs.writeFileSync(
    path.join(outputDirectory, "markdownData.json"),
    JSON.stringify(markdownData, null, 2),
  ); // Pretty print JSON
};

processHackathonMarkdownFiles().catch(console.error);

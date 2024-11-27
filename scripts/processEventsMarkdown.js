const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const markdownDirectory = path.join(process.cwd(), "src/events");
const JSONDirectory = path.join(process.cwd(), "src/app/events/");
const outputDirectory = path.join(process.cwd(), "public/data/events");

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

const processEventsMarkdownFiles = async () => {
  const filePaths = collectMdxFiles(markdownDirectory);

  const allEventsDataPromises = filePaths.map(
    async ({ fullPath, relativePath }) => {
      const id = relativePath.replace(/\.mdx$/, "").replace(/\//g, "_");

      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);
      if (!data.title) return null;

      const eventsData = {
        id,
        ...data,
      };

      const outputDir = path.join(outputDirectory, path.dirname(relativePath));
      const individualOutputPath = path.join(outputDir, `${id}.mdx`);

      if (!fs.existsSync(outputDir))
        fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(individualOutputPath, fileContents);

      return eventsData;
    },
  );

  const allEventsData = await Promise.all(allEventsDataPromises);

  const markdownData = allEventsData
    .filter((data) => data)
    .sort(({ index: a }, { index: b }) => {
      return a - b;
    });

  fs.writeFileSync(
    path.join(JSONDirectory, "markdownData.json"),
    JSON.stringify(markdownData, null, 2),
  ); // Pretty print JSON
};

processEventsMarkdownFiles().catch(console.error);

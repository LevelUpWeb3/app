const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const markdownDirectory = path.join(process.cwd(), "src/contents");
const JSONDirectory = path.join(process.cwd(), "src/app/content/");
const publicDirectory = path.join(process.cwd(), "public/data/contents");

const processContentMarkdownFiles = async () => {
  const fileNames = fs.readdirSync(markdownDirectory);

  const allContentDataPromises = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(markdownDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    if (!data.name) return null;

    const contentData = {
      id,
      ...data,
    };
    const individualOutputPath = path.join(publicDirectory, `${id}.mdx`);

    if (!fs.existsSync(publicDirectory))
      fs.mkdirSync(publicDirectory, { recursive: true });
    fs.writeFileSync(individualOutputPath, fileContents);

    return contentData;
  });

  const allContentData = await Promise.all(allContentDataPromises);

  const markdownData = allContentData
    .filter((data) => data)
    .sort(({ index: a }, { index: b }) => {
      return a - b;
    });

  fs.writeFileSync(
    path.join(JSONDirectory, "markdownData.json"),
    JSON.stringify(markdownData, null, 2),
  ); // Pretty print JSON
};

processContentMarkdownFiles().catch(console.error);

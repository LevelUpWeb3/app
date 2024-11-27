const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const markdownDirectory = path.join(process.cwd(), "src/challenges/solidity");
const JSONDirectory = path.join(process.cwd(), "src/app/solidity/");
const outputDirectory = path.join(process.cwd(), "public/data/solidity");

const processSolidityMarkdownFiles = async () => {
  const fileNames = fs.readdirSync(markdownDirectory);

  const allChallengesDataPromises = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(markdownDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);
    if (!data.name) return null;

    const challengeData = {
      id,
      ...data,
    };
    const individualOutputPath = path.join(outputDirectory, `${id}.mdx`);

    if (!fs.existsSync(outputDirectory))
      fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(individualOutputPath, fileContents);

    return challengeData;
  });

  const allChallengesData = await Promise.all(allChallengesDataPromises);

  const markdownData = allChallengesData
    .filter((data) => data)
    .sort(({ index: a }, { index: b }) => {
      return a - b;
    });

  fs.writeFileSync(
    path.join(JSONDirectory, "markdownData.json"),
    JSON.stringify(markdownData, null, 2),
  ); // Pretty print JSON
};

processSolidityMarkdownFiles().catch(console.error);

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const markdownDirectory = path.join(process.cwd(), 'src/challenges');
const outputDirectory = path.join(process.cwd(), 'public/data');

const processMarkdownFiles = async () => {
  const fileNames = fs.readdirSync(markdownDirectory);
  const serialize = (await import('next-mdx-remote/serialize')).serialize;

  const allChallengesDataPromises = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(markdownDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        development: true,
      }
    }); 

    return {
      id,
      ...data,
      content: mdxSource
    };
  });

  const allChallengesData = await Promise.all(allChallengesDataPromises); 

  const markdownData = allChallengesData.filter(data => data.name).sort(({ index: a }, { index: b }) => {
    return a - b;
  });

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true }); 
  }

  fs.writeFileSync(path.join(outputDirectory, 'markdownData.json'), JSON.stringify(markdownData, null, 2)); // Pretty print JSON
};

processMarkdownFiles().catch(console.error);

// lib/challenges.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const challengesDirectory = path.join(process.cwd(), 'challenges');

export function getSortedChallengesData() {
  const fileNames = fs.readdirSync(challengesDirectory);
  const allChallengesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(challengesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data } = matter(fileContents);
    return {
      id,
      ...data
    };
  });

  return allChallengesData.sort(({ index: a }, { index: b }) => {
    if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
  });
}

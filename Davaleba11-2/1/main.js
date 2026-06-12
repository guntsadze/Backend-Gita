import fs from "fs/promises";
import path from "path";

const VOWEL_REGEX = /[aeiouyაეიოუ]/gi;

async function analyzeFile(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");

    const trimmedContent = content.trim();
    const wordsCount = trimmedContent ? trimmedContent.split(/\s+/).length : 0;

    const vowelsMatch = content.match(VOWEL_REGEX);
    const vowelsCount = vowelsMatch ? vowelsMatch.length : 0;

    return { words: wordsCount, vowels: vowelsCount };
  } catch (error) {
    return { words: 0, vowels: 0 };
  }
}

async function scanDirectory(dirPath) {
  let totalWords = 0;
  let totalVowels = 0;

  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const subDirResult = await scanDirectory(fullPath);
      totalWords += subDirResult.totalWords;
      totalVowels += subDirResult.totalVowels;
    } else if (entry.isFile() && path.extname(entry.name) === ".txt") {
      const fileResult = await analyzeFile(fullPath);
      totalWords += fileResult.words;
      totalVowels += fileResult.vowels;
    }
  }

  return { totalWords, totalVowels };
}

async function main() {
  const targetDir = path.join(process.cwd(), "Task12");

  const result = await scanDirectory(targetDir);

  console.log("სიტყვები", result.totalWords);
  console.log("ხმოვნები", result.totalVowels);
}

main();

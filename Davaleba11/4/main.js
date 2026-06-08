const fs = require("fs/promises");

const VOWELS = ["ა", "ე", "ი", "ო", "უ", "a", "e", "i", "o", "u"];

async function analyzeText() {
  const text = await fs.readFile("random.txt", "utf-8");

  if (!text.trim()) {
    await fs.writeFile(
      "result.json",
      JSON.stringify({ word: 0, vowel: 0, chars: 0 }),
    );
    return;
  }

  const wordsArray = text
    .replace(/[ ]{2,}/g, " ")
    .trim()
    .split(" ");
  const wordCount = wordsArray.length;

  const cleanChars = text.replace(/\s/g, "");
  const charsCount = cleanChars.length;

  const lowerText = text.toLowerCase();
  let vowelCount = 0;

  for (let i = 0; i < lowerText.length; i++) {
    if (VOWELS.includes(lowerText[i])) {
      vowelCount++;
    }
  }

  const result = {
    word: wordCount,
    vowel: vowelCount,
    chars: charsCount,
  };

  await fs.writeFile("result.json", JSON.stringify(result), "utf-8");

  console.log(result);
}

analyzeText();

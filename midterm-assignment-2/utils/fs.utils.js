import fs from "fs/promises";

export async function readFile(filePath, isParse) {
  if (!filePath) return console.log("ფაილი არ მოიძებნა");
  const readData = await fs.readFile(filePath, "utf-8");

  return isParse ? JSON.parse(readData) : readData;
}

export async function writeFile(filePath, data) {
  if (!filePath) return console.log("ფაილი არ მოიძებნა");
  await fs.writeFile(
    filePath,
    typeof data === "string" ? data : JSON.stringify(data),
  );
}

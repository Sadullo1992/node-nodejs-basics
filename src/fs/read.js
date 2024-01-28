import fs from "fs/promises";
import { existsSync } from "fs";

const read = async () => {
  const readFilePath = "./src/fs/files/fileToRead.txt";

  try {
    if (!existsSync(readFilePath)) throw new Error("FS operation failed");

    const content = await fs.readFile(readFilePath, {
      encoding: "utf8",
    });

    console.log(content);
  } catch (err) {
    console.log(err);
  }
};

await read();

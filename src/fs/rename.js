import fs from "fs/promises";
import { existsSync } from "fs";

const rename = async () => {
  const wrongFilenamePath = "./src/fs/files/wrongFilename1.txt";
  const properFilenamePath = "./src/fs/files/properFilename.md";

  try {
    if (!existsSync(wrongFilenamePath) || existsSync(properFilenamePath))
      throw new Error("FS operation failed");
    await fs.rename(wrongFilenamePath, properFilenamePath);
  } catch (err) {
    console.log(err);
  }
};

await rename();

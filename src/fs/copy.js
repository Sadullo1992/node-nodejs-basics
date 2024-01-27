import fs from "fs/promises";
import { existsSync } from "fs";

const copy = async () => {
  const currentDir = "./src/fs/files";
  const copiedDir = "./src/fs/files_copy";

  try {
    if (!existsSync(currentDir) || existsSync(copiedDir))
      throw new Error("FS operation failed");
    await fs.cp(currentDir, copiedDir, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};

await copy();

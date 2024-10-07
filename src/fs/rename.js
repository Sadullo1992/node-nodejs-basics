import fs from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "fs";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const rename = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const oldPath = join(__dirname, "files", "wrongFilename.txt");
  const newPath = join(__dirname, "files", "properFilename.md");

  try {
    if (!existsSync(oldPath) || existsSync(newPath))
      throw new Error("FS operation failed");
    await fs.rename(oldPath, newPath);
  } catch (e) {
    console.log(e);
  }
};

await rename();

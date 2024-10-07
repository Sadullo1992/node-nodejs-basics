import fs from "node:fs/promises";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const remove = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const path = join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.unlink(path);
  } catch (e) {
    if (e.code === "ENOENT") throw new Error("FS operation failed");
    else console.log(e);
  }
};

await remove();

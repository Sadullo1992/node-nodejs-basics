import fs from "node:fs/promises";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const list = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const path = join(__dirname, "files");

  try {
    const files = await fs.readdir(path, {
      recursive: true,
      withFileTypes: true,
    });
    console.table(files);
  } catch (e) {
    if (e.code === "ENOENT") throw new Error("FS operation failed");
    else console.log(e);
  }
};

await list();

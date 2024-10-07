import fs from "node:fs/promises";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const read = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const filePath = join(__dirname, "files", "fileToRead.txt");

  try {
    const content = await fs.readFile(filePath, { encoding: "utf8" });

    console.log(content);
  } catch (e) {
    if (e.code === "ENOENT") throw new Error("FS operation failed");
    else console.log(e);
  }
};

await read();

import { join } from "node:path";
import { createWriteStream } from "fs";
import { pipeline } from "node:stream/promises";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const write = async () => {
  const __dirname = getAbsolutePath(import.meta.url);
  const filePath = join(__dirname, "files", "fileToWrite.txt");

  const readable = process.stdin;
  const writable = createWriteStream(filePath);

  try {
    await pipeline(readable, writable);
  } catch (e) {
    console.error(e);
  }
};

await write();

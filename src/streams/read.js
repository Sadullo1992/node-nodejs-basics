import { join } from "node:path";
import { createReadStream } from "fs";
import { pipeline } from "node:stream/promises";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const read = async () => {
  const __dirname = getAbsolutePath(import.meta.url);
  const filePath = join(__dirname, "files", "fileToRead.txt");

  const readable = createReadStream(filePath);
  const writable = process.stdout;

  try {
    await pipeline(readable, writable);
  } catch (e) {
    console.error(e);
  }
};

await read();

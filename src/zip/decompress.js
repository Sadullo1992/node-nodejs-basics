import { join } from "node:path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "node:stream/promises";
import { createUnzip } from "node:zlib";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const decompress = async () => {
  const __dirname = getAbsolutePath(import.meta.url);
  const srcFilePath = join(__dirname, "files", "archive.gz");
  const destFilePath = join(__dirname, "files", "fileToCompress.txt");

  const unzip = createUnzip();
  const source = createReadStream(srcFilePath);
  const destination = createWriteStream(destFilePath);

  try {
    await pipeline(source, unzip, destination);
  } catch (e) {
    console.error(e);
  }
};

await decompress();

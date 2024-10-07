import { join } from "node:path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const compress = async () => {
  const __dirname = getAbsolutePath(import.meta.url);
  const srcFilePath = join(__dirname, "files", "fileToCompress.txt");
  const destFilePath = join(__dirname, "files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(srcFilePath);
  const destination = createWriteStream(destFilePath);

  try {
    await pipeline(source, gzip, destination);
  } catch (e) {
    console.error(e);
  }
};

await compress();

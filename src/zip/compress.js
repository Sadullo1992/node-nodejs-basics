import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createWriteStream, createReadStream } from "fs";

const compress = async () => {
  const readFilePath = "./src/zip/files/fileToCompress.txt";
  const writeFilePath = "./src/zip/files/archive.gz";

  const gzip = createGzip();
  const source = createReadStream(readFilePath);
  const destination = createWriteStream(writeFilePath);

  try {
    await pipeline(source, gzip, destination);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

await compress();

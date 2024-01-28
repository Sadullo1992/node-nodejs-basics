import { createUnzip } from "zlib";
import { pipeline } from "stream/promises";
import { createWriteStream, createReadStream } from "fs";

const decompress = async () => {
  const readFilePath = "./src/zip/files/archive.gz";
  const writeFilePath = "./src/zip/files/fileToCompress.txt";

  const unzip = createUnzip();
  const source = createReadStream(readFilePath);
  const destination = createWriteStream(writeFilePath);

  try {
    await pipeline(source, unzip, destination);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

await decompress();

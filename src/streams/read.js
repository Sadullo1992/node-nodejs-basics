import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const read = async () => {
  const readableStream = createReadStream("./src/streams/files/fileToRead.txt");

  try {
    await pipeline(readableStream, process.stdout);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

await read();

import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const write = async () => {
  const writableStream = createWriteStream(
    "./src/streams/files/fileToWrite.txt"
  );

  try {
    await pipeline(process.stdin, writableStream);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

await write();

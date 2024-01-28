import { Transform, pipeline } from "stream";

const transform = async () => {
  const readable = process.stdin;
  const writable = process.stdout;

  const transform = new Transform({
    transform(chunk, _, cb) {
      const chunkStringified = chunk.toString().trim();

      const revesedChunk = chunkStringified.split("").reverse().join("");

      this.push(revesedChunk + "\n");

      cb();
    },
  });

  pipeline(readable, transform, writable, (err) => {
    console.error(`Error: ${err}`);
  });
};

await transform();

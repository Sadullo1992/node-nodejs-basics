import { createReadStream } from "fs";

const { createHash } = await import("crypto");

const calculateHash = async () => {
  const readFilePath = "./src/hash/files/fileToCalculateHashFor.txt";

  const hash = createHash("sha256");

  const readable = createReadStream(readFilePath);

  readable.on("readable", () => {
    const data = readable.read();

    if (data) hash.update(data);
    else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();

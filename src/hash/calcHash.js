const { createHash } = await import("node:crypto");
import { join } from "node:path";
import { createReadStream } from "fs";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const calculateHash = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const path = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");
  const input = createReadStream(path);

  input.on("readable", () => {
    const data = input.read();
    if (data) hash.update(data);
  });

  input.on("end", () => console.log(hash.digest("hex")));
};

await calculateHash();

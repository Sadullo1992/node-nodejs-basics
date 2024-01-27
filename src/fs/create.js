import fs from "fs/promises";
import { existsSync } from "fs";

const create = async () => {
  const file = "./src/fs/files/fresh.txt";

  try {
    if (existsSync(file)) throw new Error("FS operation failed");
    await fs.writeFile(file, "I am fresh and young");
  } catch (err) {
    console.error(err);
  }
};

await create();

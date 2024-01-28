import fs from "fs/promises";
import { existsSync } from "fs";

const list = async () => {
  const dir = "./src/fs/files";

  try {
    if (!existsSync(dir)) throw new Error("FS operation failed");
    const files = await fs.readdir(dir);
    console.log(files);
  } catch (err) {
    console.log(err);
  }
};

await list();

import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const create = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const filePath = join(__dirname, "files", "fresh.txt");
  const data = "I am fresh and young";

  try {
    await writeFile(filePath, data, { flag: "wx" });
  } catch (e) {
    if (e.code === "EEXIST") throw new Error("FS operation failed");
    else console.error(e);
  }
};

await create();

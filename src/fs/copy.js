import fs from "node:fs/promises";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const copy = async () => {
  const __dirname = getAbsolutePath(import.meta.url);

  const src = join(__dirname, "files");
  const dest = join(__dirname, "files_copy");

  try {
    await fs.cp(src, dest, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (e) {
    if (e.code === "ERR_FS_CP_EEXIST" || e.code === "ENOENT")
      throw new Error("FS operation failed");
    else console.log(e);
  }
};

await copy();

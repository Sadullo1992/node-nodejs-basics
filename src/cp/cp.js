import { fork } from "child_process";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const spawnChildProcess = async (args) => {
  const __dirname = getAbsolutePath(import.meta.url);
  const path = join(__dirname, "files");

  fork("script.js", args, {
    cwd: path,
    stdio: [process.stdin, process.stdout, "ignore", "ipc"],
  });
};

spawnChildProcess(["-arg1", "-arg2"]);

import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  fork("script.js", args, {
    cwd: "./src/cp/files",
    stdio: [process.stdin, process.stdout, "ignore", "ipc"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["-arg1", "-arg2"]);

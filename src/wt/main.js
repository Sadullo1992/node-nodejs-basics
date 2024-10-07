import { Worker } from "worker_threads";
import { availableParallelism } from "os";
import { join } from "node:path";

import { getAbsolutePath } from "../helpers/getAbsolutePath.js";

const performCalculations = async () => {
  const __dirname = getAbsolutePath(import.meta.url);
  const workerFilePath = join(__dirname, "worker.js");

  const cores = availableParallelism();
  const numbers = Array.from({ length: cores }, (_, i) => i + 10);

  const worker = (num) =>
    new Promise((resolve) => {
      const wk = new Worker(workerFilePath, { workerData: num });

      wk.on("message", (value) => resolve({ status: "resolved", data: value }));
      wk.on("error", () => resolve({ status: "error", data: null }));
    });

  Promise.all(numbers.map((num) => worker(num))).then(console.log);
};

await performCalculations();

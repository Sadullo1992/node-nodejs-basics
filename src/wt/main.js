import { Worker } from "worker_threads";
import { availableParallelism } from "os";

const performCalculations = async () => {
  const results = [];

  const numberOfCPUCores = availableParallelism();

  const calculationNumbers = Array.from(
    { length: numberOfCPUCores },
    (_, i) => i + 10
  );

  const promisifiedWorkers = calculationNumbers.map((num) => {
    return () =>
      new Promise((res, _) => {
        const worker = new Worker("./src/wt/worker.js");

        worker.on("message", (value) => {
          results.push({ status: "resolved", data: value });
          res();
        });
        worker.on("error", () => {
          results.push({ status: "error", data: null });
          res();
        });

        worker.postMessage(num);
      });
  });

  try {
    for (const worker of promisifiedWorkers) {
      await worker();
    }
  } catch (err) {
    console.error(err);
  } finally {
    console.log(results);
  }
};

await performCalculations();

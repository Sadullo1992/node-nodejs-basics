import { parentPort, workerData } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const fib = nthFibonacci(workerData);
  parentPort.postMessage(fib);
};

sendResult();

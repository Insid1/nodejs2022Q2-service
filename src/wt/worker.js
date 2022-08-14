import {
  parentPort, workerData, isMainThread,
} from 'node:worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const { num } = workerData;
  parentPort.postMessage(nthFibonacci(num));
};

if (!isMainThread) sendResult();

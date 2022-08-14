import {
  Worker,
} from 'node:worker_threads';

import os from 'os';

const createPromissifiedWorker = (num) => {
  const promissifiedWorkerResult = new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { num },
    });
    worker.on('message', (result) => {
      resolve({ status: 'resolved', data: result });
    });
    worker.on('error', () => {
      resolve({ status: 'rejected', data: null });
    });
    worker.on('exit', (code) => {
      if (code !== 0) { reject(new Error(`Worker stopped with exit code ${code}`)); }
    });
  });
  return promissifiedWorkerResult;
};

export const performCalculations = async () => {
  // Write your code here
  const result = [];
  const cpus = os.cpus();

  for (let i = 0; i < cpus.length; i++) {
    const fibWorker = (createPromissifiedWorker(1 + i));
    result.push(fibWorker);
  }
  return Promise.all(result);
};

performCalculations().then((res) => { console.log(res); });

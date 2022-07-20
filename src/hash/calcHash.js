import crypto from 'node:crypto';
import fs from 'node:fs/promises';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const calculateHash = async () => {
  const fileBuffer = await fs.readFile(path.join(__dirname, '/files/fileToCalculateHashFor.txt'));
  const hashSum = crypto
    .createHash('sha256')
    .update(fileBuffer);

  return hashSum.digest('hex');
};

console.log(await calculateHash());
import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';

const srcDirPath = path.join(__dirname, 'files');

export const list = async () => {
  try {
    const fileNames = await fs.readdir(srcDirPath);
    fileNames.forEach((fileName) => { stdout.write(fileName); });
  } catch {
    throw Error(errorMessage);
  }
};

list();

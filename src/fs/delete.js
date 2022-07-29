import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';

const srcDirPath = path.join(__dirname, 'files');
const fileToRemove = path.join(srcDirPath, 'fileToRemove.txt');

export const remove = async () => {
  try {
    await fs.rm(fileToRemove);
  } catch {
    throw new Error(errorMessage);
  }
};

remove();

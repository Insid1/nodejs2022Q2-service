import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';

const srcDirPath = path.join(__dirname, 'files');
const srcFile = path.join(srcDirPath, 'fileToRead.txt');

export const read = async () => {
  try {
    const fileText = await fs.readFile(srcFile, { encoding: 'utf-8' });
    stdout.write(fileText);
  } catch {
    throw Error(errorMessage);
  }
};
read();

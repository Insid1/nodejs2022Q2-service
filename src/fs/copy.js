import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const errorMessage = 'FS operation failed';
const srcDirPath = path.join(__dirname, 'files');
const destDirPath = path.join(__dirname, 'files_copy');

export const copy = async () => {
  // check if files_copy exists if exists throw err
  const destDirData = await fs.readdir(destDirPath).catch(() => null);
  if (destDirData !== null) { throw Error(errorMessage); }

  try {
    // check if folder files  exist if don\'t throw err
    const files = await fs.readdir(srcDirPath);

    await fs.mkdir(destDirPath);
    files.forEach(async (fileName) => {
      const srcFilePath = path.join(srcDirPath, fileName);
      const destFilePath = path.join(destDirPath, fileName);
      // copy file from one folder to another
      await fs.copyFile(srcFilePath, destFilePath);
    });
  } catch {
    throw Error(errorMessage);
  }
};
copy();

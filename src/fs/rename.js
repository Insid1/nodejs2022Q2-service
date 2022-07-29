import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';

const srcDirPath = path.join(__dirname, 'files');
const srcFile = path.join(srcDirPath, 'wrongFilename.txt');
const newFileName = 'properFilename.md';
const destFile = path.join(srcDirPath, newFileName);

export const rename = async () => {
  // handle file existence
  const destFileData = await fs.readFile(srcFile).catch(() => (null));
  if (destFileData !== null) { throw Error(errorMessage); }

  try {
    await fs.rename(srcFile, destFile);
  } catch {
    throw Error(errorMessage);
  }
};
rename();

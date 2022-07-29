import path, { dirname } from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';

const srcPathFile = path.join(__dirname, 'files', 'fresh.txt');
const fileData = 'I am fresh and young';

export const create = async () => {
  try {
    await fs.writeFile(srcPathFile, fileData, { flag: 'wx' }); // option's flag 'wx' stands for failing operation if path don\'t exists
  } catch {
    throw Error(errorMessage);
  }
};

create();

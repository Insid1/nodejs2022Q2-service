import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const dirPath = path.join(__dirname, 'files1');
const fileToRemove = path.join(dirPath, 'fileToRemove.txt');

export const list = async () => {
  await fs.readdir(dirPath, (err, files) => {
    if (err) throw Error(err);
    files.forEach((fileName) => {
      console.log(fileName);
    })
  })
};

list();
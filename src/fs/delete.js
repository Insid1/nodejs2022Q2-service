import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const dirPath = path.join(__dirname, 'files');
const fileToRemove = path.join(dirPath, 'fileToRemove.txt');

export const remove = async () => {
  await fs.rm(fileToRemove, {}, (err) => {
    if err throw Error(errorMessage);
  })
};
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const dirPath = path.join(__dirname, 'files');
const fileToRead = path.join(dirPath, 'fileToRead.txt');

export const read = async () => {
  const data = await fs.readFile(fileToRead, (err, data) => {
    if (err) throw Error(errorMessage);
    console.log(data.toString());
  })
};
read();
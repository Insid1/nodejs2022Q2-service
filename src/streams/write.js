import fs from 'node:fs';
import { stdout, stdin } from 'node:process';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FIRST IMPLEMENTATION
// export const write = async () => {
//   const writableStreamToFile = fs.createWriteStream(path.join(__dirname, '/files/fileToWrite.txt'));

//   stdin.pipe(writableStreamToFile);

//   stdin.on('data', (chunk) => {
//     if (chunk.toString().match('STOP')) {
//       stdin.unpipe(writableStreamToFile);
//     }
//     stdout.write(`data ${chunk} has been written to the file\n`);
//   })
// };

// SECOND IMPLEMENTATION
export const write = async () => {
  const writableStreamToFile = fs.createWriteStream(path.join(__dirname, '/files/fileToWrite.txt'));

  stdin.on('readable', () => {

    let chunk;
    while ((chunk = stdin.read()) !== null) {
      if (chunk.toString().match('stop')) {
        stdin.destroy();
        break;
      }
      writableStreamToFile.write(chunk);
    }
  })
};
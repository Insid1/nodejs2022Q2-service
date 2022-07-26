import fs from 'node:fs';
import { stdout } from 'node:process';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FIRST IMPLEMENTATION

// export const read = async () => {
//   const readableStream = fs.createReadStream(path.join(__dirname, '/files/fileToRead.txt'));

//   const test = readableStream.on('data', (chunk) => {
//     stdout.write(chunk);
//   })
// };

// SECOND IMPLEMENTATION
export const read = async () => {
  const readableStream = fs.createReadStream(path.join(__dirname, '/files/fileToRead.txt'));

  let body = '';

  readableStream.on('readable', () => {
    let chunk;
    while ((chunk = readableStream.read()) !== null) {
      body += chunk;
    }
  })

  readableStream.on('end', () => {
    stdout.write(body);
  })
};

read()
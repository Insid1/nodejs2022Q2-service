import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pipe = promisify(pipeline);
const input = path.join(__dirname, '/files/fileToCompress.txt');
const output = path.join(__dirname, '/files/archive.gz');

export const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);

  try {
    await pipe(
      source,
      gzip,
      destination,
    );
    console.log('file successfully compressed');
  } catch (err) {
    console.log(`Error ocurred : ${err}`);
  }
};

compress();

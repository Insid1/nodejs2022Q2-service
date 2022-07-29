import { createGunzip } from 'node:zlib';
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
const input = path.join(__dirname, '/files/archive.gz');
const output = path.join(__dirname, '/files/decompressedFile.txt');

export const decompress = async () => {
  const source = createReadStream(input);
  const destination = createWriteStream(output);

  const gunzip = createGunzip();

  await pipe(source, gunzip, destination);
};
decompress();

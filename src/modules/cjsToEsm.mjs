import path from 'path';
import fs from 'fs/promises';
import { release, version } from 'os';
import { fileURLToPath } from 'url';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
const { log } = console;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unknownObject = await import(Math.random() > 0.5
  ? './files/a.json'
  : './files/b.json',
  { assert: { type: "json" } })
  .then(module => module.default);

log(`Release ${release()}`);
log(`Version ${version()}`);
log(`Path segment separator is "${path.sep}"`);

log(`Path to current file is ${__filename}`);
log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer }

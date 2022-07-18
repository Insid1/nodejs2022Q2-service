import fs from 'node:fs/promises';

const fileName = 'fresh.txt';
const fileData = 'I am fresh and young';

export const create = async () => {
  try {
    await fs.writeFile(fileName, fileData, { flag: 'wx' }); // option's flag 'wx' stands for failing operation if path exists
  } catch {
    throw Error('FS operation failed')
  }
};
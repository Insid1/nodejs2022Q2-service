import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const dirPath = path.join(__dirname, 'files_copy');
const folderToCopy = path.join(__dirname, 'files');

export const copy = async () => {
  // check if folder files  exist if don\'t throw err
  await fs.access(folderToCopy, fs.constants.F_OK, (err) => {
    if (err) {
      throw Error(errorMessage);
    }
  })
  // check if files_copy exists if exists throw err
  await fs.access(dirPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('folder files_copy doesn\'t exist shall create it');
    } else {
      throw Error(errorMessage);
    }
  })
  // copy file from one folder to another
  await fs.readdir(folderToCopy, (err, files) => {
    // create directory
    fs.mkdir(dirPath, {}, (err) => {
      console.log(err);
    });
    // create loop to get filenames inside the directory
    files.forEach((fileName) => {
      // generate route for file to copy
      const fileToCopyRoute = path.join(folderToCopy, fileName);
      // copy files to created directory
      fs.copyFile(fileToCopyRoute, `${dirPath}/${fileName}`, 0, (err) => {
        if (err) throw Error(err);
      });
    });
  });

};
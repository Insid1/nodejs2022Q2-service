import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const errorMessage = 'FS operation failed';

const dirPath = path.join(__dirname, 'files');
const fileToRename = path.join(dirPath, 'wrongFilename.txt');
const renameText = path.join(dirPath, 'properFilename.md');

export const rename = async () => {
    // check access to wrongFileName (err DONT exist throw err)
    await fs.access(fileToRename, fs.constants.F_OK, (err) => {
        if (err) throw Error(errorMessage);
    })
    // check access to properfileName (if exists throw err)
    await fs.access(path.join(dirPath, renameText), fs.constants.F_OK, (err) => {
        if (!err) throw Error(errorMessage);
    })
    // rename the file
    await fs.rename(fileToRename, renameText, (err) => {
        if (err) throw Error(err);
        console.log('renaming successfully initialized!');
    })

};

rename();
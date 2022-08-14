import { Transform, pipeline } from 'node:stream';
import { stdout, stdin } from 'node:process';

// without Transform stream
// export const transform = async () => {
//   stdin.on('data', (data) => {
//     stdout.write([...data.toString()].reverse().join(''));
//   })
// };

// with Transform stream
export const transform = async () => {
  const revertString = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${[...chunk.toString().trim()].reverse().join('')}\n`);
    },
  });

  pipeline(
    stdin,
    revertString,
    stdout,
    (err) => {
      console.log(`Error: ${err}`);
    },
  );
};

transform();

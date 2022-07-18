// const initialText = 'RSS_';
const initialText = 'CH';

export const parseEnv = async () => {
  Object
    .entries(process.env)
    .forEach(([key, value]) => {
      if (key.startsWith(initialText)) {
        console.log(`${key} = ${value};`)
      }
    })
};

parseEnv()
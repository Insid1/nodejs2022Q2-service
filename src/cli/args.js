export const parseArgs = () => {
  const exactCMDArgument = process.argv[2];
  const arrFromArg = exactCMDArgument.split(' ');
  let result = '';

  for (let i = 0; i < arrFromArg.length; i += 2) {
    const currVal = arrFromArg[i];
    console.log(i)
    if (currVal.startsWith('--')) {
      result += `${currVal.slice(2)} is ${arrFromArg[i + 1]} `;
    }
  }
  console.log(result);
};
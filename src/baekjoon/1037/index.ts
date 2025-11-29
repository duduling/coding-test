// For Test with Example
export const input = `14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = input.shift();

  // Logic
  const divisorList = input[0].split(' ').map(Number);

  divisorList.sort((a, b) => a - b);

  return divisorList[0] * divisorList[divisorList.length - 1];
};
console.log(solution(input));

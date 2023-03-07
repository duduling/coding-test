// For Test with Example
export const input = `5
3 1 4 3 2`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  let n: number = +input[0];

  // Logic
  const waitList: number[] = input[1].split(" ").map(Number);

  waitList.sort((a: number, b: number) => a - b);

  return waitList.reduce((acc, cur) => acc + cur * n--, 0);
};
console.log(solution(input));

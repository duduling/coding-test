// For Test with Example
export const input = `14
ab13c9d07jeden`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  return input[1].split(/[^0-9]/g).reduce((acc, cur) => acc + Number(cur), 0);
};
console.log(solution(input));

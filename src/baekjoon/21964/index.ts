// For Test with Example
export const input = `12
Sunrin,Hair.`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  return input[1].slice(-5);
};
console.log(solution(input));

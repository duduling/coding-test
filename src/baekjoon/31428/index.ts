// For Test with Example
export const input = `5
I A I S S
S`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  return input[1].length - input[1].replaceAll(input[2], "").length;
};
console.log(solution(input));

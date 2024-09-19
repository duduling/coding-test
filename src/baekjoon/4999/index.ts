// For Test with Example
export const input = `aaah
aaaaah`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  return input[1].length <= input[0].length ? "go" : "no";
};
console.log(solution(input));

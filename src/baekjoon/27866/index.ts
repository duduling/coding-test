// For Test with Example
export const input = `Sprout
3`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [word, n] = input;

  // Logic
  return word[+n - 1];
};
console.log(solution(input));

// For Test with Example
export const input = `3 5 9`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [a, b, c] = input.map(Number);

  // Logic
  return Math.max(b - a, c - b) - 1;
};
console.log(solution(input));

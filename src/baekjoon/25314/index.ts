// For Test with Example
export const input = `20`.trim(); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim(); // " " | "\n"]

// My Code
const solution = (input: string) => {
  // Initial Setting
  const N = +input;

  // Logic
  return `${"long ".repeat(N / 4)}int`;
};
console.log(solution(input));

// For Test with Example
export const input = `4
SPOILER
HARD
OI01OI
OioioI`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = input.shift();

  // Logic
  return input.reduce((acc, cur) => {
    return acc + (/(01|OI)/g.test(cur) ? 1 : 0);
  }, 0);
};
console.log(solution(input));

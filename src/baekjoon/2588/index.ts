// For Test with Example
export const input = `472
385`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const firstNum = +input[0];
  const secondNum = +input[1];

  const [secondNumFirst, secondNumSecond, secondNumThird] = input[1]
    .split("")
    .map(Number);

  // Logic
  return `${firstNum * secondNumThird}\n${firstNum * secondNumSecond}\n${
    firstNum * secondNumFirst
  }\n${firstNum * secondNum}`;
};
console.log(solution(input));

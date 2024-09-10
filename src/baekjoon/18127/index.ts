// For Test with Example
export const input = `4 3`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [a, b]: number[] = input.map(Number);

  // Logic
  return ((b + 1) * ((a - 2) * b + 2)) / 2;
};
console.log(solution(input));

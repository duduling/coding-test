// For Test with Example
export const input = `4`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]): string => {
  // Initial Setting
  const N = parseInt(input[0]);

  // Logic
  let result: number[] = [];

  for (let i = 0; i < N - 1; i++) {
    result.push(i % 2 === 0 ? 1 : 2);
  }
  result.push(N % 2 === 0 ? 2 : 3);

  return result.join(" ");
};
console.log(solution(input));

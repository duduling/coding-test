// For Test with Example
export const input = `5 2`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const factorial = (num: number) => {
  let result: number = 1;

  for (; num > 1; num--) {
    result *= num;
  }

  return result;
};

const solution = (input: string[]) => {
  // Initial Setting
  const [N, K]: number[] = input.map(Number);

  // Logic
  if (N === K) return 1;

  return factorial(N) / (factorial(N - K) * factorial(K));
};
console.log(solution(input));

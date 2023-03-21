// For Test with Example
export const input = `8`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const DP: number[] = new Array(n + 1).fill(0);

  DP[0] = 0;
  DP[1] = 1;
  DP[2] = 3;

  for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
  }

  return DP[n];
};
console.log(solution(input));

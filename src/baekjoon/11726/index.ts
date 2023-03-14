// For Test with Example
export const input = `9`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  const DP: number[] = [0, 1, 2];

  for (let i = 3; i <= n; i += 1) {
    DP.push((DP[i - 1] + DP[i - 2]) % 10007);
  }

  return DP[n];
};
console.log(solution(input));

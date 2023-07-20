// For Test with Example
export const input = `4 7
6 13
4 8
3 6
5 12`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const convertInput: number[][] = input.map((str) =>
    str.split(" ").map(Number)
  );

  // Logic
  const [N, K]: number[] = convertInput[0];
  const dp: number[][] = Array.from({ length: N + 1 }, () =>
    Array.from({ length: K + 1 }, () => 0)
  );

  for (let i = 1; i <= N; i += 1) {
    const [W, V] = convertInput[i];

    for (let j = 1; j <= K; j += 1) {
      if (W <= j) {
        dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[N][K];
};
console.log(solution(input));

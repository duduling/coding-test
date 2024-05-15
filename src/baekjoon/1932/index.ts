// For Test with Example
export const input = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input.shift();

  // Logic
  const dp: number[][] = Array.from({ length: N }, (_, idx) => Array(idx + 1));
  dp[N - 1] = input[N - 1].split(" ").map(Number);

  for (let i = N - 2; 0 <= i; i -= 1) {
    const row: number[] = input[i].split(" ").map(Number);

    for (let j = 0; j <= i; j += 1) {
      dp[i][j] = row[j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
};
console.log(solution(input));

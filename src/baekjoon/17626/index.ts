// For Test with Example
export const input = ``.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split(' '); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input[0];

  // Logic
  const dp = new Array(N + 1).fill(4);
  dp[0] = 0;

  for (let i = 1; i ** 2 <= N; i++) {
    dp[i ** 2] = 1;
  }

  for (let j = 1; j <= N; j++) {
    if (dp[j] == 1) continue;

    for (let k = 1; k * k < j; k++) {
      dp[j] = Math.min(dp[j], dp[j - k ** 2] + 1);
    }
  }
  return dp[N];
};
console.log(solution(input));

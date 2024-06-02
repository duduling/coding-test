// For Test with Example
export const input = `ACAYKP
CAPCAK`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [A, B] = input;

  // Logic
  const dp: number[][] = Array.from({ length: A.length + 1 }, () =>
    Array(B.length + 1).fill(0)
  );

  for (let i = 1; i <= A.length; i += 1) {
    for (let j = 1; j <= B.length; j += 1) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[A.length][B.length];
};
console.log(solution(input));

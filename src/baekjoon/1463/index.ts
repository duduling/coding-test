// For Test with Example
export const input = `10`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  const memo: number[] = [0, 0];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + 1;

    if (i % 2 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    }

    if (i % 3 === 0) {
      memo[i] = Math.min(memo[i], memo[i / 3] + 1);
    }
  }

  console.log(memo[n]);
};
solution(input);

// For Test with Example
export const input = `6
10
20
15
25
10
20`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];
  const pointStepList: number[] = input.map(Number);

  // Logic
  const DP: number[] = Array(n + 1).fill(0);

  DP[1] = pointStepList[1];
  DP[2] = DP[1] + pointStepList[2];
  DP[3] = Math.max(pointStepList[1], pointStepList[2]) + pointStepList[3];

  for (let j = 4; j <= n; j += 1) {
    DP[j] =
      Math.max(DP[j - 3] + pointStepList[j - 1], DP[j - 2]) + pointStepList[j];
  }

  return DP[n];
};
console.log(solution(input));

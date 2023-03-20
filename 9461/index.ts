// For Test with Example
export const input = `2
6
12`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const answer: number[] = [];
  const DP: number[] = [0, 1, 1, 1];

  for (let i = 1; i <= n; i += 1) {
    const curNum: number = +input[i];

    if (!DP[curNum]) {
      for (let j = 4; j <= curNum; j += 1) {
        if (!DP[j]) DP.push(DP[j - 3] + DP[j - 2]);
      }
    }

    answer.push(DP[curNum]);
  }

  return answer.join("\n");
};

console.log(solution(input));

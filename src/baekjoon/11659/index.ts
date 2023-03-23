// For Test with Example
export const input = `5 3
5 4 3 2 1
1 3
2 4
5 5
`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = input.shift().split(" ").map(Number);

  // Logic
  const answer: number[] = [];
  const memo: number[] = [0];
  const numList: number[] = input.shift().split(" ").map(Number);

  for (let i = 1; i <= n; i += 1) {
    memo.push(memo[i - 1] + numList[i - 1]);
  }

  for (let j = 0; j < m; j += 1) {
    const [a, b]: number[] = input[j].split(" ").map(Number);

    answer.push(memo[b] - memo[a - 1]);
  }

  return answer.join("\n");
};
console.log(solution(input));

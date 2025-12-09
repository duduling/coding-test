// For Test with Example
export const input = `5
1
2
10
70
10000`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  const numList = input.slice(1).map(Number);
  const MAX = Math.max(...numList);

  const f = new Array(MAX + 1).fill(0);
  for (let i = 1; i <= MAX; i += 1) {
    for (let j = i; j <= MAX; j += i) {
      f[j] += i;
    }
  }

  const g = new Array(MAX + 1).fill(0);
  for (let i = 1; i <= MAX; i += 1) {
    g[i] = g[i - 1] + f[i];
  }

  return numList.map((n) => g[n]).join('\n');
};

console.log(solution(input));

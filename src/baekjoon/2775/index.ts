// For Test with Example
export const input = `2
1
3
2
3`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input.shift();

  // Logic
  for (let i = 0; i < n * 2; i += 2) {
    const x: number = +input[i];
    const y: number = +input[i + 1];

    const answer: number[][] = Array.from({ length: x + 1 }, () =>
      Array.from({ length: y }, (_, idx) => idx + 1)
    );

    for (let i = 1; i <= x; i++) {
      for (let j = 0; j < y; j++) {
        answer[i][j] = (answer[i - 1]?.[j] || 0) + (answer[i]?.[j - 1] || 0);
      }
    }
    console.log(answer[x][y - 1]);
  }
};
solution(input);

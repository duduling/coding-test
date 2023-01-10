// For Test with Example
export const input = `10
1
3
5
4
0
0
7
0
0
6`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const answer: number[] = [0];

  for (let i = 1; i <= n; i += 1) {
    const curNum: number = +input[i];

    if (curNum === 0) {
      answer.pop();
    } else {
      answer.push(curNum);
    }
  }

  console.log(
    answer.length === 0
      ? 0
      : answer.reduce((acc: number, cur: number): number => acc + cur)
  );
};
solution(input);

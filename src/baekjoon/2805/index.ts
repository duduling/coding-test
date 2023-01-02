// For Test with Example
export const input = `2 10000
10001 20000`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = input[0].split(" ").map((val: string) => +val);
  const woodList: number[] = input[1]
    .split(" ")
    .map((val: string) => +val)
    .sort((a: number, b: number) => b - a);

  // Logic
  let answer: number = 0;
  for (let i = 0; i < n; i += 1) {
    const nextStage = woodList[i] - (woodList[i + 1] || 0);

    for (let j = 0; j < nextStage; j += 1) {
      const cutLine: number = woodList[i] - j;
      answer += i + 1;
      if (m <= answer) {
        return console.log(cutLine - 1);
      }
    }
  }
};
solution(input);

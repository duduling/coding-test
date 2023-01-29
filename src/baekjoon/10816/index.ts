// For Test with Example
export const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];
  const nList: number[] = input[1].split(" ").map((val: string) => +val);
  const m: number = +input[2];
  const mList: number[] = input[3].split(" ").map((val: string) => +val);

  // Logic
  const nMap: Map<number, number> = new Map();
  for (let i = 0; i < n; i += 1) {
    const curNum: number = +nList[i];

    nMap.set(curNum, (nMap.get(curNum) || 0) + 1);
  }

  const answer: number[] = [];
  for (let j = 0; j < m; j += 1) {
    answer.push(nMap.get(mList[j]) || 0);
  }

  console.log(answer.join(" "));
};
solution(input);

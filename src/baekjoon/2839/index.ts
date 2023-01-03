// For Test with Example
export const input = `6`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  let result = -1;
  let fiveCnt = Math.floor(n / 5);

  while (fiveCnt >= 0) {
    const remainNum = n - fiveCnt * 5;

    if (remainNum % 3 === 0) {
      result = remainNum / 3 + fiveCnt;
      break;
    } else {
      fiveCnt -= 1;
    }
  }

  console.log(result);
};
solution(input);

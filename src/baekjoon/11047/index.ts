// For Test with Example
export const input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  let [coinCnt, money]: number[] = input[0].split(" ").map(Number);

  // Logic
  let answer: number = 0;
  for (let i = coinCnt; 0 < money && 0 < i; i--) {
    console.log(money);
    const coinValue: number = +input[i];
    answer += Math.floor(money / coinValue);
    money = money % coinValue;
  }

  return answer;
};
console.log(solution(input));

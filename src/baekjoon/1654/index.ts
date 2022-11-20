// For Test with Example
// const tmp = `4 11
// 802
// 743
// 457
// 539`;
// const input = tmp.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const [, m] = input
//     .shift()
//     .split(" ")
//     .map((val: string) => +val);

//   // Logic
//   const lineList: number[] = input.map((val: string) => +val);

//   let min: number = 1;
//   let answer: number = Math.max(...lineList);

//   while (min <= answer) {
//     const midNum = Math.floor((answer + min) / 2);
//     const tmpLineCnt = lineList.reduce((acc, cur) => {
//       return acc + Math.floor(cur / midNum);
//     }, 0);

//     if (tmpLineCnt < m) {
//       answer = midNum - 1;
//     } else {
//       min = midNum + 1;
//     }
//   }
//   console.log(answer);
// }
// solution(input);

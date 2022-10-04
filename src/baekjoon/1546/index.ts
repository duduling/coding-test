// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const n: number = +input[0];
//   const scoreList: number[] = input[1].split(" ").map((val: string) => +val);

//   // Logic
//   const max = Math.max(...scoreList);
//   const totalSum = scoreList.reduce((acc, cur) => acc + (cur / max) * 100, 0);

//   console.log(totalSum / n);
// }
// solution(input);

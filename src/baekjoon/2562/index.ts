// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const numList: number[] = input.map((val: string) => +val);

//   // Logic
//   const maxNum: number = Math.max(...numList);
//   const targetIdx: number = numList.indexOf(maxNum);

//   console.log(maxNum);
//   console.log(targetIdx + 1);
// }
// solution(input);

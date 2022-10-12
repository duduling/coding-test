// For Test
// const input = require("fs")
//   .readFileSync("./ex.txt")
//   .toString()
//   .trim()
//   .split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const numArr: number[] = input.map((val: string) => +val);

//   // Logic
//   console.log(new Set(numArr.map((num) => num % 42)).size);
// }
// solution(input);

// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const numList: number[] = input[0].split(" ").map((val: string) => +val);

//   // Logic
//   const answer = numList.reduce((acc, cur) => acc + cur ** 2, 0) % 10;

//   console.log(answer);
// }
// solution(input);

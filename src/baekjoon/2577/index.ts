// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const numArr: number[] = input.map((val: string) => +val);

//   // Logic
//   const totalSum = String(numArr[0] * numArr[1] * numArr[2]);

//   for (let i = 0; i <= 9; i++) {
//     console.log(totalSum.split(String(i)).length - 1);
//   }
// }
// solution(input);

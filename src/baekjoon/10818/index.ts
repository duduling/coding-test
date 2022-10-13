// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const n: number = input[0];
//   const numArr: number[] = input[1].split(" ").map((val: string) => +val);

//   // Logic
//   let [min, max]: number[] = [numArr[0], numArr[0]];

//   for (let i = 0; i < n; i++) {
//     if (numArr[i] < min) {
//       min = numArr[i];
//     } else if (max < numArr[i]) {
//       max = numArr[i];
//     }
//   }

//   console.log(min, max);
// }
// solution(input);

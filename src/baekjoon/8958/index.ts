// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const n = input[0];

//   // Logic
//   for (let i = 1; i <= n; i++) {
//     const resultArr: string[] = input[i].split("");

//     let answer: number = 0;
//     let cnt: number = 0;
//     for (let j = 0; j < resultArr.length; j++) {
//       if (resultArr[j] === "O") {
//         cnt++;
//         answer += cnt;
//       } else {
//         cnt = 0;
//       }
//     }
//     console.log(answer);
//   }
// }
// solution(input);

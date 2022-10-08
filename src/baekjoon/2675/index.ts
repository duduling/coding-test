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
//     const [loop, word]: string[] = input[i].split(" ");

//     console.log(
//       word.split("").reduce((acc, cur) => acc + cur.repeat(+loop), "")
//     );
//   }
// }
// solution(input);

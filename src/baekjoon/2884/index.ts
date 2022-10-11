// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split(" "); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const hour: number = +input[0];
//   const minute: number = +input[1];

//   // Logic
//   const remainMinute = minute - 45;

//   if (remainMinute < 0) {
//     const remainHour = hour - 1;

//     if (remainHour < 0) {
//       return console.log(`${remainHour + 24} ${remainMinute + 60}`);
//     } else {
//       console.log(`${remainHour} ${remainMinute + 60}`);
//     }
//   } else {
//     console.log(`${hour} ${remainMinute}`);
//   }
// }
// solution(input);

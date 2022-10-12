// For Test
// const input = require("fs").readFileSync("./ex.txt").toString().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = require("fs").readFileSync("/dev/stdin").toString().split(" "); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const arr: number[] = input.map((val: string) => +val);

//   // Logic
//   let cnt: number = 0;
//   for (let i = 1; i < 8; i++) {
//     if (arr[i - 1] < arr[i]) {
//       cnt++;
//     }
//   }
//   console.log(cnt === 7 ? "ascending" : cnt === 0 ? "descending" : "mixed")
// }
// solution(input);

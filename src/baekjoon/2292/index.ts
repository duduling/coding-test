// For Test with Example
// const input = `13`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const n: number = +input;

//   // Logic
//   let answer: number = 1;
//   let sum: number = 1;

//   while (sum < n) {
//     sum += answer * 6;
//     answer++;
//   }
//   console.log(answer);
// }
// solution(input);

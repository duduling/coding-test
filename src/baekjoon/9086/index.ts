// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const n: number = +input[0];

//   // Logic
//   const answer: string[] = [];
//   for (let i = 1; i <= n; i++) {
//     answer.push(`${input[i][0]}${input[i][input[i].length - 1]}`);
//   }
//   console.log(answer.join("\n"));
// }
// solution(input);

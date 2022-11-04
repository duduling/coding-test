// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const [n, m]: number[] = input
//     .shift()
//     .split(" ")
//     .map((val: string) => +val);

//   // Logic
//   let answer = "";
//   for (let i = 0; i < n; i++) {
//     const sumRow: number[] = [];
//     const firstRow: number[] = input[i].split(" ").map((val: string) => +val);
//     const secondRow: number[] = input[i + n]
//       .split(" ")
//       .map((val: string) => +val);

//     for (let j = 0; j < m; j++) {
//       sumRow.push(firstRow[j] + secondRow[j]);
//     }
//     answer += `${sumRow.join(" ")}\n`;
//   }
//   console.log(answer);
// }
// solution(input);

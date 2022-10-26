// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const n = input.length;
//   const tmpSet = new Set(input.map((val: string) => +val));
//   // Logic
//   for (let i = 1; i <= 30; i++) {
//     if (!tmpSet.has(i)) console.log(i);
//   }
// }
// solution(input);

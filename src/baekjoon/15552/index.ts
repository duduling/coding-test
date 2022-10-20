// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const n = input[0];

//   // Logic
//   let answer = "";

//   for (let i = 1; i <= n; i++) {
//     const [a, b]: string[] = input[i].split(" ");

//     answer += `${+a + +b}\n`;
//   }

//   console.log(answer);
// }
// solution(input);

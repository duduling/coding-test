// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const [n, limitNum]: number[] = input[0]
//     .split(" ")
//     .map((val: string) => +val);
//   const numArr: number[] = input[1].split(" ").map((val: string) => +val);

//   // Logic
//   const answer = [];

//   for (let i = 0; i < n; i++) {
//     if (numArr[i] < limitNum) {
//       answer.push(numArr[i]);
//     }
//   }

//   console.log(answer.join(" "));
// }
// solution(input);

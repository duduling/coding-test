// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const n: number = +input[0];
//   const numberStrArr: string = input[1].split(" ");
//   const v: string = input[2];

//   // Logic
//   let answer = 0;

//   for (let i = 0; i < n; i++) {
//     if (numberStrArr[i] === v) answer++;
//   }

//   console.log(answer);
// }
// solution(input);

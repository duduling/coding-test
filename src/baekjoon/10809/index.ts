// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const word: string = input[0];

//   // Logic
//   const answer = Array(26).fill(-1);

//   for (let i = 0; i < word.length; i++) {
//     const convertAscii: number = word.charCodeAt(i) - 97;

//     if (answer[convertAscii] === -1) {
//       answer[convertAscii] = i;
//     }
//   }

//   console.log(answer.join(" "));
// }
// solution(input);

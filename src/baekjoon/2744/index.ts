// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // [" " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const word = input[0];

//   // Logic
//   let answer: string = "";
//   const REVERSE_CHAR_NUM = 32;

//   for (let i = 0; i < word.length; i++) {
//     const charCode = word.charCodeAt(i);

//     if (charCode < 97) {
//       answer += String.fromCharCode(charCode + REVERSE_CHAR_NUM);
//     } else {
//       answer += String.fromCharCode(charCode - REVERSE_CHAR_NUM);
//     }
//   }
//   console.log(answer);
// }
// solution(input);

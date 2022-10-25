// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   input.pop();
//   const n = input.length;

//   // Logic
//   let answer = "";

//   loop: for (let i = 0; i < n; i++) {
//     const word = input[i];
//     const wordLength = word.length;

//     for (let j = 0; j < Math.floor(wordLength / 2); j++) {
//       if (word[j] !== word[wordLength - j - 1]) {
//         answer += "no\n";
//         continue loop;
//       }
//     }

//     answer += "yes\n";
//   }

//   console.log(answer);
// }
// solution(input);

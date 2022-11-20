// For Test with Example
// const tmp = `8 8
// WBWBWBWB
// BWBWBWBW
// WBWBWBWB
// BWBBBWBW
// WBWBWBWB
// BWBWBWBW
// WBWBWBWB
// BWBWBWBW`;
// const input = tmp.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const [n, m]: number[] = input
//     .shift()
//     .split(" ")
//     .map((val: string) => +val);

//   // Logic
//   const answer: number[] = [];
//   function checkBlackAndWhite(x: number, y: number) {
//     let [blackCnt, whiteCnt] = [0, 0];

//     for (let i = 0; i < 8; i++) {
//       for (let j = 0; j < 8; j++) {
//         const tmp = (i + x + j + y) % 2 === 0 ? "B" : "W";

//         if (input[i + x][j + y] !== tmp) {
//           blackCnt++;
//         } else {
//           whiteCnt++;
//         }
//       }
//     }
//     return [blackCnt, whiteCnt];
//   }
//   for (let i = 0; i < n - 7; i++) {
//     for (let j = 0; j < m - 7; j++) {
//       answer.push(...checkBlackAndWhite(i, j));
//     }
//   }

//   console.log(Math.min(...answer));
// }
// solution(input);

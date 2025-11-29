// For Test with Example
// const tmp = `8
// 4
// 3
// 6
// 8
// 7
// 5
// 2
// 1`;
// const input = tmp.trim().split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const n = +input.shift();

//   // Logic
//   const answer: string[] = [];

//   const stack: number[] = [];
//   let curNum: number = 1;

//   for (let i = 0; i < n; i += 1) {
//     const targetNum: number = +input[i];

//     while (curNum <= targetNum) {
//       stack.push(curNum);
//       curNum += 1;
//       answer.push('+');
//     }

//     if (stack.pop() !== targetNum) {
//       console.log('NO');
//     }
//   }

//   console.log(answer.join('\n'));
// }
// solution(input);

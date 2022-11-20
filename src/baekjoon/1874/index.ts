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
// const input = tmp.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const n = +input.shift();

//   // Logic
//   let curNum: number = 1;

//   const tmpStack: number[] = [];
//   let answer: string = "";

//   for (let i = 0; i < n; i++) {
//     const tmpNum: number = +input[i];

//     while (curNum <= tmpNum) {
//       tmpStack.push(curNum);
//       curNum++;
//       answer += "+\n";
//     }

//     if (tmpStack.pop() !== tmpNum) {
//       return console.log("NO");
//     }

//     answer += "-\n";
//   }
//   console.log(answer);
// }
// solution(input);

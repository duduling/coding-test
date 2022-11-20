// For Test with Example
// const tmp = `5
// 4 1 5 2 3
// 5
// 1 3 7 9 5`;
// const input = tmp.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const haveNumList: Set<number> = new Set(
//     input[1].split(" ").map((val: string) => +val)
//   );

//   const m: number = +input[2];
//   const searchNumList: number[] = input[3]
//     .split(" ")
//     .map((val: string) => +val);

//   // Logic
//   const answer: number[] = [];
//   for (let j = 0; j < m; j++) {
//     answer.push(haveNumList.has(searchNumList[j]) ? 1 : 0);
//   }
//   console.log(answer.join("\n"));
// }
// solution(input);

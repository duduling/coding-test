// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split("\r\n"); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
// function solution(input: string[]) {
//   // Initial Setting
//   const answer: string = Array.from(new Set(input.slice(1)))
//     .sort((a: string, b: string) => a.length - b.length || a.localeCompare(b))
//     .join("\n");

//   // Logic
//   console.log(answer);
// }
// solution(input);

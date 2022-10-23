// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // [" " | "\n"]

// My Code
// function solution(input: any) {
//   // Initial Setting
//   const [x, y, w, h]: number[] = input.map((val: string) => +val);

//   // Logic
//   console.log(Math.min(x, y, w - x, h - y));
// }
// solution(input);

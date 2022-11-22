// For Test with Example
// const tmp = `3 16`;
// const input = tmp.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// const checkPrimeNum = (num: number): Boolean => {
//   if (num === 1) return false;
//   if (num === 2) return true;

//   const sqrtNum: number = Math.sqrt(num);
//   for (let i = 2; i <= sqrtNum; i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// };

// // My Code
// const solution = (input: string[]) => {
//   // Initial Setting
//   const [n, m]: number[] = input.map((val: string) => +val);

//   // Logic
//   const answer: number[] = [];
//   for (let i = n; i <= m; i++) {
//     if (checkPrimeNum(i)) answer.push(i);
//   }
//   console.log(answer.join("\n"));
// };
// solution(input);

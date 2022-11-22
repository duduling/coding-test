// For Test with Example
// const tmp = `4
// 1 3 5 7`;
// const input = tmp.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// const isPrime = (num: number): Boolean => {
//   if (num === 1) return false;
//   if (num === 2) return true;

//   const sqrtNum = Math.sqrt(num);

//   for (let i = 2; i <= sqrtNum; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const solution = (input: string[]) => {
//   // Initial Setting
//   const n = +input[0];
//   const numList: number[] = input[1].split(" ").map((val: string) => +val);

//   // Logic
//   let answer: number = 0;
//   for (let i = 0; i < n; i++) {
//     const curNum: number = numList[i];
//     if (isPrime(curNum)) answer++;
//   }

//   console.log(answer);
// };
// solution(input);

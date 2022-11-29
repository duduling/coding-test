// For Test with Example
export const input = `216`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  for (let i = 1; i < n; i++) {
    const totalSum: number =
      i +
      i
        .toString()
        .split("")
        .reduce((acc, cur) => {
          return acc + +cur;
        }, 0);
    if (totalSum === n) {
      return console.log(i);
    }
  }
  console.log(0);
};
solution(input);

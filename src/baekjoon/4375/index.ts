// For Test with Example
export const input = `3
7
9901`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  const numList = input.map(Number);
  const results = [];

  for (const num of numList) {
    let remainder = 1 % num;
    let i = 1;

    while (remainder !== 0) {
      remainder = (remainder * 10 + 1) % num;
      i += 1;
    }
    results.push(i);
  }
  return results.join('\n');
};
console.log(solution(input));

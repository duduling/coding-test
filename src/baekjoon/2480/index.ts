// For Test with Example
export const input = `3 3 6`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [a, b, c] = input.map(Number);

  // Logic
  // 같은 눈 3개 나올 때
  if (a === b && b === c) {
    return 10000 + a * 1000;
  }
  // 같은 눈 2개 나올 때
  if (a === b || a === c) {
    return 1000 + a * 100;
  }
  if (b === c) {
    return 1000 + b * 100;
  }
  // 같은 눈 1개 나올 때
  return Math.max(a, b, c) * 100;
};
console.log(solution(input));

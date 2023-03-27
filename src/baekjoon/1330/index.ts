// For Test with Example
export const input = `1 2`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = input[0].split(" ").map(Number);

  // Logic
  if (n === m) return "==";
  else if (n < m) return "<";
  else if (n > m) return ">";
};
console.log(solution(input));

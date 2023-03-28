// For Test with Example
export const input = `1
-1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: bigint[] = input.map(BigInt);

  // Logic
  console.log(`${n + m}\n${n - m}\n${n * m}`);
};
solution(input);

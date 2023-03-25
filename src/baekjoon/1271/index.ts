// For Test with Example
export const input = `100 1000`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: bigint[] = input[0].split(" ").map(BigInt);

  // Logic
  return `${n / m}\n${n % m}`;
};
console.log(solution(input));

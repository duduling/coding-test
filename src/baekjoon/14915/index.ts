// For Test with Example
export const input = `248 16`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [M, N] = input.map(Number);

  // Logic
  return M.toString(N).toUpperCase();
};
console.log(solution(input));

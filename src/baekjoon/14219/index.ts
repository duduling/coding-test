// For Test with Example
export const input = `5 3`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [width, height] = input.map(Number);

  // Logic
  return width % 3 === 0 || height % 3 === 0 ? "YES" : "NO";
};
console.log(solution(input));

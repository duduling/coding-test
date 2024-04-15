// For Test with Example
export const input = `5 8 4`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [A, B, C]: number[] = input.map(Number);

  // Logic
  const tmp1 = (A + B) % C;
  const tmp2 = (A * B) % C;
  return `${tmp1}\n${tmp1}\n${tmp2}\n${tmp2}`;
};
console.log(solution(input));

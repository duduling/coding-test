// For Test with Example
export const input = `0 1 2 2 2 7`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  const fullList: number[] = [1, 1, 2, 2, 2, 8];

  return input.map((str, idx) => fullList[idx] - Number(str)).join(" ");
};
console.log(solution(input));

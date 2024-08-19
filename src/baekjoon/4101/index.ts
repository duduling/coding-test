// For Test with Example
export const input = `1 19
4 4
23 14
0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  for (let i = 0; i < input.length - 1; i += 1) {
    const [a, b] = input[i].split(" ").map(Number);

    console.log(b < a ? "Yes" : "No");
  }
};
solution(input);

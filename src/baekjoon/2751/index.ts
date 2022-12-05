// For Test with Example
export const input = `5
5
4
3
2
1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  input.shift();

  // Logic
  console.log(
    input
      .map((val: string) => +val)
      .sort((a: number, b: number) => a - b)
      .join("\n")
  );
};
solution(input);

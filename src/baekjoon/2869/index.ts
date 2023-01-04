// For Test with Example
export const input = `2 1 5`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [a, b, goal]: number[] = input.map((val: string) => +val);

  // Logic
  console.log(Math.ceil((goal - a) / (a - b)) + 1);
};
solution(input);

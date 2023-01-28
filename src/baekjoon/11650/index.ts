// For Test with Example
export const input = `5
3 4
1 1
1 -1
2 2
3 3`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  input.shift();

  // Logic
  const numberList: number[][] = input.map((str: string) => {
    const [a, b]: string[] = str.split(" ");
    return [+a, +b];
  });

  numberList.sort(([aa, ab], [ba, bb]) => (aa - ba === 0 ? ab - bb : aa - ba));

  console.log(numberList.map((arr: number[]) => arr.join(" ")).join("\n"));
};
solution(input);

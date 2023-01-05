// For Test with Example
export const input = `6 8 10
25 52 60
5 12 13
0 0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  input.forEach((item: string) => {
    const [a, b, c]: number[] = item.split(" ").map((val: string) => +val);

    if (a && b && c) {
      if (
        Math.pow(a, 2) +
          Math.pow(b, 2) +
          Math.pow(c, 2) -
          Math.pow(Math.max(a, b, c), 2) * 2 ===
        0
      ) {
        return console.log("right");
      }
      return console.log("wrong");
    }
  });
};
solution(input);

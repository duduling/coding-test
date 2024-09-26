// For Test with Example
export const input = `5 3 4
3
4
5
6
7`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, W, H] = input.shift().split(" ").map(Number);

  // Logic
  return input
    .map((matchStr) => {
      const matchCnt = +matchStr;

      return matchCnt <= Math.sqrt(W ** 2 + H ** 2) ? "DA" : "NE";
    })
    .join("\n");
};
console.log(solution(input));

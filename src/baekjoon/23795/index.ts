// For Test with Example
export const input = `1
2
3
4
5
6
7
8
9
10
-1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  let answer: number = 0;

  for (let i = 0; i < input.length - 1; i += 1) {
    answer += Number(input[i]);
  }
  return answer;
};
console.log(solution(input));

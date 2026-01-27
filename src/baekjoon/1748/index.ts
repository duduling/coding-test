// For Test with Example
export const input = `120`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  let N = +input.shift();

  // Logic
  let answer = N
  for (let i = 10; i <= N; i *= 10) {
    answer += N - i + 1
  }

  return answer

}
console.log(solution(input));

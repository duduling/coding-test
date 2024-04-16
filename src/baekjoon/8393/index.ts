// For Test with Example
export const input = `3`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  let answer = 0;

  for (let i = 1; i <= n; i += 1) {
    answer += i;
  }

  return answer;
};
console.log(solution(input));

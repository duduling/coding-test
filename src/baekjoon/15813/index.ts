// For Test with Example
export const input = `7
SUNGPIL`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input[0];
  const nameStr: string = input[1];

  // Logic
  let answer = 0;

  for (let i = 0; i < N; i += 1) {
    answer += nameStr.charCodeAt(i);
  }

  answer -= 64 * N;

  return answer;
};
console.log(solution(input));

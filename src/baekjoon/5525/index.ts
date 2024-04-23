// For Test with Example
export const input = ``.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = input[0];

  // Logic
  const N: number = +input[0];
  const M: number = +input[1];
  const S: string = input[2];

  let answer = 0;
  let patternCount = 0;

  for (let i = 1; i < M - 1; i += 1) {
    if (S[i - 1] === "I" && S[i] === "O" && S[i + 1] === "I") {
      patternCount += 1;
      if (N === patternCount) {
        patternCount -= 1;
        answer += 1;
      }
      i += 1;
    } else {
      patternCount = 0;
    }
  }
  return answer;
};
console.log(solution(input));

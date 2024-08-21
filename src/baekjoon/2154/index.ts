// For Test with Example
export const input = `15`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = input.shift();

  // Logic
  let answer = "";

  for (let i = 1; i <= +N; i += 1) {
    answer += i.toString();
  }

  return answer.indexOf(N) + 1;
};
console.log(solution(input));

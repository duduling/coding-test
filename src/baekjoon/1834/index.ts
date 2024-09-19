// For Test with Example
export const input = `2000000`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();

  // Logic
  let answer = BigInt(0);

  for (let i = 1; i < N; i += 1) {
    answer += BigInt((N + 1) * i);
  }

  return answer.toString();
};
console.log(solution(input));

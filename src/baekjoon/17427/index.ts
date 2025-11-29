// For Test with Example
export const input = `10000`.trim().split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  const N = +input.shift();

  let answer = 0;
  for (let k = 1; k <= N; k += 1) {
    answer += k * Math.floor(N / k);
  }

  return answer;
};

console.log(solution(input));

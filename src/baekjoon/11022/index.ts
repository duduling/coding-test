// For Test with Example
export const input = `5
1 1
2 3
3 4
9 8
5 2`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();

  // Logic
  const answer: string[] = [];

  for (let i = 0; i < N; i += 1) {
    const [a, b] = input[i].split(" ").map(Number);

    answer.push(`Case #${i + 1}: ${a} + ${b} = ${a + b}`);
  }

  return answer.join("\n");
};
console.log(solution(input));

// For Test with Example
export const input = `5 4
1 2 3
3 4 4
1 4 1
2 2 2`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input.shift().split(" ").map(Number);

  // Logic
  const answer: number[] = new Array(N).fill(0);

  for (let i = 0; i < M; i += 1) {
    const [start, end, ballNum] = input[i].split(" ").map(Number);

    for (let j = start - 1; j < end; j += 1) {
      answer[j] = ballNum;
    }
  }

  return answer.join(" ");
};
console.log(solution(input));

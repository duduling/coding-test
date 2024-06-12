// For Test with Example
export const input = `1 2
6 10
1 1000000000
0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  const answer: number[] = [];

  for (let i = 0; i < input.length - 1; i += 1) {
    const numList: number[] = input[i].split(" ").map(Number);

    const minNum: number = Math.min(...numList);
    const maxNum: number = Math.max(...numList);

    answer.push(minNum * 2 - maxNum);
  }

  return answer.join("\n");
};
console.log(solution(input));

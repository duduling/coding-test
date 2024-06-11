// For Test with Example
export const input = `5
1 6
3 7
6 2
7 100
9 635`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = input.shift();

  // Logic
  const answer: number[] = [];

  for (let i = 0; i < input.length; i += 1) {
    const [a, b]: number[] = input[i].split(" ").map(Number);

    let accNum: number = 1;

    for (let j = 1; j <= b; j += 1) {
      accNum = (accNum * a) % 10;
    }
    answer.push(accNum === 0 ? 10 : accNum);
  }

  return answer.join("\n");
};

console.log(solution(input));

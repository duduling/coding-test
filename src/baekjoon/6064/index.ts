// For Test with Example
export const input = ``.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // ' ' | '\n']

// My Code
const findYear = (M: number, N: number, x: number, y: number) => {
  let resultYear: number = -1;

  for (let k = x; k <= M * N; k += M) {
    if ((k - y) % N === 0) {
      resultYear = k;
      break;
    }
  }

  return resultYear;
};

const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const answer: number[] = [];

  for (let i = 1; i <= n; i += 1) {
    const [M, N, x, y]: number[] = input[i].split(" ").map(Number);

    answer.push(findYear(M, N, x, y));
  }

  return answer.join("\n");
};
console.log(solution(input));

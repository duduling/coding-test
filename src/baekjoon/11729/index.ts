// For Test with Example
export const input = `3`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]): string => {
  // Initial Setting
  const N = parseInt(input[0]);
  let moves: string[] = [];

  const hanoi = (n: number, from: number, to: number, aux: number): void => {
    if (n === 1) {
      moves.push(`${from} ${to}`);
      return;
    }
    hanoi(n - 1, from, aux, to);
    moves.push(`${from} ${to}`);
    hanoi(n - 1, aux, to, from);
  };

  // Logic
  hanoi(N, 1, 3, 2);

  return `${moves.length}\n${moves.join("\n")}`;
};

console.log(solution(input));

// For Test with Example
export const input = `30 3
1 3
3 7
1 4`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input.shift()!.split(" ").map(Number);

  // Logic
  const answer: boolean[] = Array.from({ length: N + 1 }, () => false);

  for (let i = 0; i < M; i += 1) {
    const [start, distance]: number[] = input[i].split(" ").map(Number);

    for (let j = start; j <= N; j += distance) {
      answer[j] = true;
    }
  }

  return N - answer.filter((check) => check).length;
};
console.log(solution(input));

// For Test with Example
export const input = `3 5
OOOPO
OIOOX
OOOXP`
  .trim()
  .split("\n"); // [' ' | '\n']

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const solution = (input: string[]) => {
  // Initial Setting
  const [Y, X]: number[] = input.shift()!.split(" ").map(Number);

  // Logic
  let queueIdx = 0;
  const queue: number[][] = [];
  let answer: number = 0;

  // 어디 있는지 찾기
  findI: for (let i = 0; i < Y; i += 1) {
    const row = input[i];
    for (let j = 0; j < X; j += 1) {
      if (row[j] === "I") {
        queue.push([i, j]);
        break findI;
      }
    }
  }

  // BFS
  const visited: boolean[][] = Array.from({ length: Y }, () =>
    Array(X).fill(false)
  );

  while (queueIdx < queue.length) {
    const [y, x] = queue[queueIdx];

    if (input[y][x] === "P") {
      answer += 1;
    }

    for (let k = 0; k < 4; k += 1) {
      const moveY = y + DIRECTIONS[k][0];
      const moveX = x + DIRECTIONS[k][1];

      if (
        0 <= moveY &&
        moveY < Y &&
        0 <= moveX &&
        moveX < X &&
        !visited[moveY][moveX] &&
        input[moveY][moveX] !== "X"
      ) {
        visited[moveY][moveX] = true;
        queue.push([moveY, moveX]);
      }
    }

    queueIdx += 1;
  }

  return 0 < answer ? answer : "TT";
};
console.log(solution(input));

// For Test with Example
export const input = `4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const TETROMINOS = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
  ],
  [
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
];

const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input.shift().split(' ').map(Number);
  const board = input.map((row) => row.split(' ').map(Number));

  // Logic
  let answer = 0;

  for (let i = 0; i < N; i += 1) {
    for (let l = 0; l < M; l += 1) {
      newTetomino: for (const tetromino of TETROMINOS) {
        let sum = 0;

        for (const [y, x] of tetromino) {
          const [moveY, moveX] = [y + i, x + l];

          if (moveY < 0 || moveX < 0 || M <= moveX || N <= moveY)
            continue newTetomino;

          sum += board[moveY][moveX];
        }

        answer = Math.max(answer, sum);
      }
    }
  }

  return answer;
};
console.log(solution(input));

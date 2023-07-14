const WAYS = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

function solution(board) {
  let answer = board.length * board[0].length;
  const tmpBoard = Array.from({ length: board[0].length }, () =>
    Array.from({ length: board.length }, () => true)
  );

  board.forEach((row, y) => {
    row.forEach((val, x) => {
      if (val === 1) {
        tmpBoard[y][x] = false;

        WAYS.forEach(([moveY, moveX]) => {
          if (tmpBoard?.[y + moveY]?.[x + moveX]) {
            tmpBoard[y + moveY][x + moveX] = false;
            answer--;
          }
        });
      }
    });
  });

  return tmpBoard
    .flatMap((arr) => arr.flatMap((val) => val))
    .filter((val) => val).length;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

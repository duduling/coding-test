// For Test with Example
export const input = `3 2
..
.*
..
5 5
*.*.*
..*..
*****
.....
..**.
0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n");

// My Code
const solution = (input: string[]): string => {
  const WAYS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  // Logic
  const answer: string[] = [];
  let index = 0;

  while (true) {
    const [limitY, limitX] = input[index++].split(" ").map(Number);
    if (limitY === 0 && limitX === 0) break;

    const board: string[][] = [];
    for (let i = 0; i < limitY; i++) {
      board.push(input[index++].split(""));
    }

    const tmpAnswerBoard: string[][] = Array.from({ length: limitY }, () =>
      Array.from({ length: limitX }, () => "0")
    );

    for (let y = 0; y < limitY; y++) {
      for (let x = 0; x < limitX; x++) {
        if (board[y][x] === "*") {
          tmpAnswerBoard[y][x] = "*";
          for (const [distanceY, distanceX] of WAYS) {
            const moveY = y + distanceY;
            const moveX = x + distanceX;

            if (
              0 <= moveY &&
              moveY < limitY &&
              0 <= moveX &&
              moveX < limitX &&
              tmpAnswerBoard[moveY][moveX] !== "*"
            ) {
              tmpAnswerBoard[moveY][moveX] = `${
                Number(tmpAnswerBoard[moveY][moveX]) + 1
              }`;
            }
          }
        }
      }
    }

    answer.push(tmpAnswerBoard.map((row) => row.join("")).join("\n"));
  }

  return answer.join("\n");
};

console.log(solution(input));

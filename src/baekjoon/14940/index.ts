// For Test with Example
export const input = `
5 5
1 1 1 1 1
1 0 0 1 1
1 0 2 0 1
1 1 0 1 1
1 1 1 1 1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const DIRECTIONS = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = input.shift().split(" ").map(Number);
  const tables = input.map((table) => table.split(" "));

  // Logic
  let answer = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => -1)
  );
  let visitedTables = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );

  let startPointX;
  let startPointY;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      switch (tables[i][j]) {
        case "0": {
          answer[i][j] = 0;
          visitedTables[i][j] = true;
          break;
        }

        case "2": {
          visitedTables[i][j] = true;
          startPointY = i;
          startPointX = j;
          break;
        }
        default:
          break;
      }
    }
  }

  const queue: number[][] = [[startPointY, startPointX]];
  let queueIdx = 0;

  answer[startPointY][startPointX] = 0;

  while (queueIdx < queue.length) {
    const [y, x] = queue[queueIdx];
    const distance = answer[y][x] + 1;

    for (let k = 0; k < 4; k += 1) {
      const moveY = y + DIRECTIONS[k][0];
      const moveX = x + DIRECTIONS[k][1];

      if (
        0 <= moveY &&
        moveY < n &&
        0 <= moveX &&
        moveX < m &&
        !visitedTables[moveY][moveX]
      ) {
        answer[moveY][moveX] = distance;
        visitedTables[moveY][moveX] = true;
        queue.push([moveY, moveX]);
      }
    }

    queueIdx += 1;
  }

  return answer.map((row) => row.join(" ")).join("\n");
};
console.log(solution(input));

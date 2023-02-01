// For Test with Example
export const input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const way: number[][] = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

let tableArr: number[][] = [];

const BFS = (startX: number, startY: number) => {
  const queue = [[startX, startY]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (!tableArr[x][y]) continue;
    else tableArr[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const [wayX, wayY]: number[] = way[i];

      const xPos = x + wayX;
      const yPos = y + wayY;

      if (
        xPos < 0 ||
        yPos < 0 ||
        xPos >= tableArr.length ||
        yPos >= tableArr[0].length
      )
        continue;
      if (tableArr[xPos][yPos]) queue.push([xPos, yPos]);
    }
  }
};

// Initial Setting
const n = +input.shift();

// Logic
const answer: number[] = [];
let tempCnt: number = 0;

for (let i = 0; i < n; i++) {
  let cnt: number = 0;
  const [row, col, remain]: number[] = input[tempCnt].split(" ").map(Number);
  tableArr = Array.from({ length: row }, () => new Array(col).fill(0));

  tempCnt++;

  for (let j = 0; j < remain; j++) {
    let [x, y] = input[tempCnt].split(" ").map(Number);
    tableArr[x][y] = 1;

    tempCnt++;
  }

  for (let k = 0; k < row; k++) {
    for (let l = 0; l < col; l++) {
      if (tableArr[k][l]) {
        BFS(k, l);
        cnt++;
      }
    }
  }
  answer.push(cnt);
}

console.log(answer.join("\n"));

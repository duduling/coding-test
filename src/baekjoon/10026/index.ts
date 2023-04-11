// For Test with Example
export const input = `5
RRRBB
GGBBB
BBBRR
BBRRR
RRRRR`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

const FOUR_WAYS: number[][] = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input.shift();
  const colorGraph: string[][] = input.map((str: string) => str.split(""));

  // Logic
  let visitedGraph: boolean[][] = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  let aCnt: number = 0;
  let bCnt: number = 0;

  const BFS = (x: number, y: number) => {
    const queue: number[][] = [[x, y]];

    while (queue.length) {
      const [a, b]: number[] = queue.shift();

      FOUR_WAYS.forEach(([aa, bb]: number[]) => {
        const moveA = a + aa;
        const moveB = b + bb;
        if (
          moveA < 0 ||
          moveB < 0 ||
          n <= moveA ||
          n <= moveB ||
          visitedGraph[moveA][moveB] ||
          colorGraph[a][b] !== colorGraph[moveA][moveB]
        ) {
        } else {
          visitedGraph[moveA][moveB] = true;
          queue.push([moveA, moveB]);
        }
      });
    }
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (!visitedGraph[i][j]) {
        visitedGraph[i][j] = true;
        aCnt += 1;
        BFS(i, j);
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (colorGraph[i][j] === "G") {
        colorGraph[i][j] = "R";
      }
    }
  }

  visitedGraph = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (!visitedGraph[i][j]) {
        visitedGraph[i][j] = true;
        bCnt += 1;
        BFS(i, j);
      }
    }
  }
  return `${aCnt} ${bCnt}`;
};
console.log(solution(input));

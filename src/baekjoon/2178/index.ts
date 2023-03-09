// For Test with Example
export const input = `4 6
101111
101010
101011
111011`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const waysList: number[][] = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
const solution = (input: string[]) => {
  // Initial Setting
  const [H, W]: number[] = input
    .shift()
    .split(" ")
    .map((str: string) => +str - 1);

  // Logic
  let coordinateMap: number[][] = input.map((str: string) =>
    str.split("").map(Number)
  );
  let visited: number[][] = Array.from(Array(H + 1), () =>
    Array(W + 1).fill(-1)
  );

  visited[0][0] = 1;

  const queue: number[][] = [[0, 0]];
  while (0 < queue.length) {
    const [h, w]: number[] = queue.shift();

    for (let i = 0; i < 4; i += 1) {
      const [moveW, moveH]: number[] = waysList[i];

      const nextW = w + moveW;
      const nextH = h + moveH;

      if (nextW < 0 || nextH < 0 || W < nextW || H < nextH) continue;
      if (visited[nextH][nextW] === -1 && coordinateMap[nextH][nextW] === 1) {
        visited[nextH][nextW] = visited[h][w] + 1;
        queue.push([nextH, nextW]);
      }
    }
  }

  return visited[H][W];
};
console.log(solution(input));

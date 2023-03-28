// For Test with Example
export const input = `4 3 2
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
-1 -1 -1 -1
1 1 1 -1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const FOUR_WAYS: number[][] = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];
const solution = ([MN, ...input]: string[]) => {
  // Initial Setting
  const [M, N]: number[] = MN.split(" ").map(Number);

  // Logic
  const tomatoFarm = input.map((str: string) => str.split(" ").map(Number));
  const queue: number[][] = [];

  let answer: number = 0;
  let pointerIdx: number = 0;
  let zeroCount: number = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      switch (tomatoFarm[i][j]) {
        case 1:
          queue.push([j, i, 0]);
          break;
        case 0:
          zeroCount++;
          break;

        default:
          break;
      }
    }
  }

  while (pointerIdx < queue.length) {
    const [x, y, count]: number[] = queue[pointerIdx++];

    FOUR_WAYS.forEach(([offsetX, offsetY]: number[]) => {
      const moveX: number = x + offsetX;
      const moveY: number = y + offsetY;

      if (tomatoFarm?.[moveY]?.[moveX] === 0) {
        queue.push([moveX, moveY, count + 1]);
        zeroCount--;

        tomatoFarm[moveY][moveX] = 1;
        answer = Math.max(answer, count + 1);
      }
    });
  }

  return zeroCount ? -1 : answer;
};
console.log(solution(input));

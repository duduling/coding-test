// For Test with Example
export const input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`
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
  const n = +input.shift();

  // Logic
  const answer: number[] = [];
  const visitedMap: boolean[][] = Array.from({ length: n }, () =>
    Array(n).fill(false)
  );

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const curIsHouse: number = +input[i][j];
      if (curIsHouse === 1 && !visitedMap[i][j]) {
        let houseCnt: number = 1;

        const queue: number[][] = [[i, j]];
        visitedMap[i][j] = true;

        while (0 < queue.length) {
          const [a, b]: number[] = queue.shift();

          for (const [y, x] of FOUR_WAYS) {
            const moveY = a + y;
            const moveX = b + x;

            if (
              0 <= moveY &&
              moveY < n &&
              0 <= moveX &&
              moveX < n &&
              input[moveY][moveX] === "1" &&
              !visitedMap[moveY][moveX]
            ) {
              queue.push([moveY, moveX]);
              visitedMap[moveY][moveX] = true;
              houseCnt += 1;
            }
          }
        }
        answer.push(houseCnt);
      }
    }
  }

  answer.sort((a: number, b: number) => a - b);

  return `${answer.length}\n${answer.join("\n")}`;
};
console.log(solution(input));

// For Test with Example
export const input = `
8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  const n = +input.shift();
  const paper = input.map((val) => val.split(" "));

  function checkAndDividend(
    y: number,
    x: number,
    size: number
  ): [number, number] {
    let white: number = 0;
    let blue: number = 0;
    const isWhite = paper[y][x] == "0";

    for (let tmpY = y; tmpY < y + size; tmpY += 1) {
      for (let tmpX = x; tmpX < x + size; tmpX += 1) {
        if (paper[y][x] !== paper[tmpY][tmpX]) {
          const halfSize: number = size / 2;
          const results: [number, number][] = [
            checkAndDividend(y, x, halfSize),
            checkAndDividend(y, x + halfSize, halfSize),
            checkAndDividend(y + halfSize, x, halfSize),
            checkAndDividend(y + halfSize, x + halfSize, halfSize),
          ];

          results.forEach(([w, b]) => {
            white += w;
            blue += b;
          });

          return [white, blue];
        }
      }
    }
    return isWhite ? [1, 0] : [0, 1];
  }
  return checkAndDividend(0, 0, n).join("\n");
};
console.log(solution(input));

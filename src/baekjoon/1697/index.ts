// For Test with Example
export const input = `5 17`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [subinPosition, sisterPosition]: number[] = input.map(Number);

  // Logic
  const visited: boolean[] = Array(100001).fill(false);
  const queue: number[][] = [[subinPosition, 0]];

  while (queue.length) {
    const [curPosition, time]: number[] = queue.shift();

    if (curPosition === sisterPosition) return time;

    for (const movePosition of [
      curPosition - 1,
      curPosition + 1,
      curPosition * 2,
    ]) {
      if (
        !visited[movePosition] &&
        0 <= movePosition &&
        movePosition <= 100000
      ) {
        visited[movePosition] = true;
        queue.push([movePosition, time + 1]);
      }
    }
  }
};
console.log(solution(input));

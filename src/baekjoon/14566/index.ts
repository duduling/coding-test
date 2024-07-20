// For Test with Example
export const input = `5
1 3 5 7 9`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input.shift();

  // Logic
  const points: number[] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let minDistance = Number.MAX_SAFE_INTEGER;

  // Find the minimum distance
  for (let i = 1; i < N; i++) {
    const distance = points[i] - points[i - 1];
    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  // Count pairs with minimum distance
  let count = 0;
  for (let i = 1; i < N; i++) {
    if (points[i] - points[i - 1] === minDistance) {
      count++;
    }
  }

  return `${minDistance} ${count}`;
};

console.log(solution(input));

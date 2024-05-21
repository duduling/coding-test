// For Test with Example
export const input = `2 162`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input.map(Number);

  // Logic
  let idx: number = 0;
  const queue: number[][] = [[N, 1]];

  while (idx < queue.length) {
    const [curNum, cnt] = queue[idx++];

    if (curNum === M) return cnt;

    const nextNum1 = curNum * 2;
    const nextNum2 = curNum * 10 + 1;

    if (nextNum1 <= M) {
      queue.push([nextNum1, cnt + 1]);
    }
    if (nextNum2 <= M) {
      queue.push([nextNum2, cnt + 1]);
    }
  }

  return -1;
};
console.log(solution(input));

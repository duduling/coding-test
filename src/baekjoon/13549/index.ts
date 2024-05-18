// For Test with Example
export const input = `5 17`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input.map(Number);

  // Logic
  const visit = Array.from({ length: 100100 }, () => false);
  const queue: number[][] = [[N, 0]];

  while (queue.length) {
    const [position, time]: number[] = queue.shift();

    if (position === M) return time;

    if (!visit[position] && 0 <= position && position <= 100000) {
      visit[position] = true;
      for (let i = 0; i < 3; i += 1) {
        switch (i) {
          case 0: {
            queue.unshift([position * 2, time]);
            break;
          }
          case 1: {
            queue.push([position + 1, time + 1]);
            break;
          }
          case 2: {
            queue.push([position - 1, time + 1]);
            break;
          }

          default:
            break;
        }
      }
    }
  }
};
console.log(solution(input));

// For Test with Example
export const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m, ...computers] = input;

  // Logic
  let answer = 0;
  const ways: number[][] = Array.from({ length: +n + 1 }, () => []);
  const visited: boolean[] = Array.from({ length: +n + 1 }, () => false);

  for (let i = 0; i < +m; i += 1) {
    const [from, to] = computers[i].split(" ").map(Number);

    ways[from].push(to);
    ways[to].push(from);
  }

  const BFS = (startComputer: number) => {
    const queue = [startComputer];
    while (queue.length) {
      const curComputer = queue.shift();

      if (!visited[curComputer]) {
        answer += 1;
        queue.push(...ways[curComputer]);
        visited[curComputer] = true;
      }
    }
  };

  BFS(1);

  return answer - 1;
};
console.log(solution(input));

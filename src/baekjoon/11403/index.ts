// For Test with Example
export const input = `7
0 0 0 1 0 0 0
0 0 0 0 0 0 1
0 0 0 0 0 0 0
0 0 0 0 1 1 0
1 0 0 0 0 0 0
0 0 0 0 0 0 1
0 0 1 0 0 0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const BFS = (GRAPH: number[][], start: number, N: number): number[] => {
  let result: number[] = Array(N).fill(0);
  let visited: boolean[] = [];

  let queue: number[] = [start];
  while (queue.length) {
    const curPosition = queue.shift();

    for (let j = 0; j < N; j += 1) {
      if (!visited[j] && GRAPH[curPosition][j] === 1) {
        visited[j] = true;
        queue.push(j);
        result[j] = 1;
      }
    }
  }

  return result;
};
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();
  const GRAPH = input.map((str) => str.split(" ").map(Number));

  // Logic
  const answer = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i += 1) {
    answer[i] = BFS(GRAPH, i, N);
  }

  return answer.map((arr) => arr.join(" ")).join("\n");
};
console.log(solution(input));

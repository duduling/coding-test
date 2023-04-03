// For Test with Example
export const input = `6 5
1 2
2 5
5 1
3 4
4 6`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // ' ' | '\n']

// My Code
const solution = ([input, ...inputs]: string[]) => {
  // Initial Setting
  const [n]: number[] = input.split(" ").map(Number);
  const numList: number[][] = inputs.map((str: string) =>
    str.split(" ").map(Number)
  );

  // Logic
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);

  numList.forEach(([a, b]: number[]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  let cnt: number = 0;
  const memo: boolean[] = new Array(n + 1).fill(false);

  const DFS = (arr: number[]) => {
    arr.forEach((idx: number) => {
      if (!memo[idx]) {
        memo[idx] = true;
        DFS(graph[idx]);
      }
    });
  };

  for (let j = 1; j < graph.length; j++) {
    if (!memo[j]) {
      cnt++;
      DFS(graph[j]);
    }
  }

  console.log(cnt);
};
solution(input);

// For Test
export const input = `5 5 3
5 4
5 2
1 2
3 4
3 1`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // [" " | "\n"]

// My Code
function solution(input: any) {
  // Initial Setting
  const [N, M, V] = input.shift().split(' ').map(Number);

  // Logic
  const graph: number[][] = Array.from({ length: N + 1 }, () => []);

  input.forEach((row: string) => {
    const [a, b] = row.split(' ').map(Number);

    graph[a].push(b);
    graph[b].push(a);
  });

  // 각 노드 정렬
  graph.forEach((row) => {
    row.sort((a, b) => a - b);
  });

  // DFS
  const visitedDfs: boolean[] = Array.from({ length: N + 1 }, () => false);
  const dfsResult: number[] = [];

  const dfs = (node: number) => {
    visitedDfs[node] = true;
    dfsResult.push(node);

    graph[node].forEach((nexNode) => {
      if (!visitedDfs[nexNode]) {
        dfs(nexNode);
      }
    });
  };

  // BFS
  const visitedBfs: boolean[] = Array.from({ length: N + 1 }, () => false);
  const bfs = (node: number): number[] => {
    const queue: number[] = [node];
    const resultBfs: number[] = [];

    visitedBfs[node] = true;
    while (queue.length > 0) {
      const curNode = queue.shift();
      resultBfs.push(curNode);

      graph[curNode].forEach((nextNode) => {
        if (!visitedBfs[nextNode]) {
          visitedBfs[nextNode] = true;
          queue.push(nextNode);
        }
      });
    }

    return resultBfs;
  };

  dfs(V);
  const bfsResult = bfs(V);

  console.log(dfsResult.join(' '));
  console.log(bfsResult.join(' '));
}

solution(input);

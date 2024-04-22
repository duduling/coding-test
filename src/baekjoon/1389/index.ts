// For Test with Example
export const input = `5 5
1 3
1 4
4 5
4 3
3 2`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

type Graph = Map<number, number[]>;

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = input[0].split(" ").map(Number)[0];
  const friendList = input.slice(1).map((pair) => pair.split(" ").map(Number));

  // Logic
  const BFS = (start: number, friendGraph: Graph, N: number) => {
    const queue: number[] = [start];
    const visited = Array(N + 1).fill(-1);
    visited[start] = 0;

    let queueIdx = 0;
    while (queueIdx < queue.length) {
      const curFriend = queue[queueIdx];

      friendGraph.get(curFriend).forEach((neighbor) => {
        if (visited[neighbor] === -1) {
          visited[neighbor] = visited[curFriend] + 1;
          queue.push(neighbor);
        }
      });

      queueIdx += 1;
    }

    return visited.slice(1).reduce((acc, cur) => acc + cur, 0);
  };

  // 그래프 구성
  const friendGraph: Graph = new Map();
  for (let i = 1; i <= N; i++) {
    friendGraph.set(i, []);
  }

  // 1단계 친구 세팅
  friendList.forEach(([pairA, pairB]) => {
    friendGraph.get(pairA)?.push(pairB);
    friendGraph.get(pairB)?.push(pairA);
  });

  // 순회
  const answer: number[] = [];
  for (let i = 1; i <= N; i++) {
    answer[i] = BFS(i, friendGraph, N);
  }

  // 가장 작은 케빈 베이컨 수를 가진 사람 찾기
  const minNumber = Math.min(...answer.slice(1));
  return answer.findIndex((val) => val === minNumber);
};
console.log(solution(input));

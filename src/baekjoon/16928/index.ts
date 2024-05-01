// For Test with Example
export const input = `3 7
32 62
42 68
12 98
95 13
97 25
93 37
79 27
75 19
49 47
67 17`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input[0].split(" ").map(Number);

  // Logic
  const ladderSnakeMap: Map<number, number> = new Map();

  for (let i = 1; i <= N + M; i += 1) {
    const [from, to] = input[i].split(" ").map(Number);

    ladderSnakeMap.set(from, to);
  }

  const queue: any[] = [
    {
      cur: 1,
      cnt: 0,
    },
  ];
  const visited: boolean[] = new Array(101).fill(false);

  while (queue.length) {
    const { cur, cnt } = queue.shift();

    for (let j = 1; j <= 6; j += 1) {
      let move: number = cur + j;

      if (ladderSnakeMap.has(move)) {
        move = ladderSnakeMap.get(move);
      }

      if (move === 100) {
        return cnt + 1;
      } else if (move < 100 && !visited[move]) {
        queue.push({
          cur: move,
          cnt: cnt + 1,
        });
        visited[move] = true;
      }
    }
  }
};

console.log(solution(input));

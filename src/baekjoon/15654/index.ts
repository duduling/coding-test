// For Test with Example
export const input = `4 2
9 8 7 1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input.shift().split(" ").map(Number);
  const numList: number[] = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  // Logic
  const answer: number[] = [];
  const visited: boolean[] = new Array(N).fill(false);

  function dfs(idx: number) {
    if (answer.length === M) {
      console.log(answer.join(" "));
      return;
    }

    for (let i = 0; i < N; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        answer.push(numList[i]);
        dfs(idx + 1);
        answer.pop();
        visited[i] = false;
      }
    }
  }

  dfs(0);
};
solution(input);

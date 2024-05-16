// For Test with Example
export const input = `3 3`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input.map(Number);

  // Logic
  const answer: number[] = [];

  function dfs(curNum: number) {
    if (answer.length === M) {
      console.log(answer.join(" "));
      return;
    }

    for (let i = curNum; i <= N; i++) {
      answer.push(i);
      dfs(i);
      answer.pop();
    }
  }

  dfs(1);
};
solution(input);

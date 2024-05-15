// For Test with Example
export const input = `4 2`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input.shift().split(" ").map(Number);

  // Logic
  const saveBox: number[] = [];

  const dfs = (start: number) => {
    if (saveBox.length === M) {
      console.log(saveBox.join(" "));
      return;
    }

    for (let i = start; i <= N; i += 1) {
      saveBox.push(i);
      dfs(i + 1);
      saveBox.pop();
    }
  };

  dfs(1);
};

solution(input);

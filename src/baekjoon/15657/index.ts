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
  const [N, M]: number[] = input[0].split(" ").map(Number);
  const numList: number[] = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  // Logic
  const arr: number[] = [];
  function dfs() {
    if (arr.length === M) {
      console.log(arr.join(" "));
    } else {
      for (let i = 0; i < N; i += 1) {
        if (numList[i] < arr[arr.length - 1]) continue;

        arr.push(numList[i]);
        dfs();
        arr.pop();
      }
    }
  }

  dfs();
};
solution(input);

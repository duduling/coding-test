// For Test with Example
export const input = `3 3`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input.shift().split(" ").map(Number);

  // Logic
  const result: string[] = [];

  function backtrack(arr: number[]): void {
    if (arr.length === M) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      arr.push(i);
      backtrack(arr);
      arr.pop();
    }
  }

  backtrack([]);
  return result.join("\n");
};
console.log(solution(input));

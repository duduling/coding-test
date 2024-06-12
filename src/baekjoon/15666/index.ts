// For Test with Example
export const input = `4 4
1 1 2 2`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input[0].split(" ").map(Number);
  const sortedList: number[] = input[1].split(" ").map(Number);
  sortedList.sort((a, b) => a - b);

  // Logic
  const answer: string[] = [];

  const backtracking = (idx: number, arr: number[]) => {
    if (arr.length === M) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = idx; i < N; i += 1) {
      if (sortedList[i - 1] === sortedList[i]) continue;

      arr.push(sortedList[i]);
      backtracking(i, arr);
      arr.pop();
    }
  };

  backtracking(0, []);

  return answer.join("\n");
};
console.log(solution(input));

// For Test with Example
export const input = `4 4
1 1 1 1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M]: number[] = input[0].split(" ").map(Number);
  const sortNumList: number[] = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  // Logic
  const answer: string[] = [];
  const tmpArr: number[] = [];
  const visited = Array(N).fill(false);

  function backTracking(idx: number) {
    if (idx === M) {
      answer.push(tmpArr.join(" "));
      return;
    }

    for (let i = 0; i < sortNumList.length; i++) {
      if (
        visited[i] ||
        (sortNumList[i] === sortNumList[i - 1] && !visited[i - 1])
      )
        continue;

      tmpArr.push(sortNumList[i]);
      visited[i] = true;

      backTracking(idx + 1);

      tmpArr.pop();
      visited[i] = false;
    }
  }

  backTracking(0);

  return answer.join("\n");
};
console.log(solution(input));

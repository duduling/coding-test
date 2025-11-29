// For Test with Example
export const input = `10 5
1 2 3 4 2 5 3 1 1 2`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input.shift().split(' ').map(Number);
  const numList = input[0].split(' ').map(Number);

  // Logic
  let [startIdx, endIdx] = [0, 0];
  let accNum = numList[0];
  let answer = 0;

  while (startIdx < N && endIdx < N) {
    if (accNum < M) {
      if (endIdx < N) {
        endIdx += 1;
        accNum += numList[endIdx];
      }
    } else if (accNum > M) {
      accNum -= numList[startIdx];
      startIdx += 1;
    } else {
      answer++;
      accNum -= numList[startIdx];
      startIdx += 1;
    }
  }

  return answer;
};
console.log(solution(input));

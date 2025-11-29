// For Test with Example
export const input = `6
9
2 7 4 1 5 3`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();
  const M = +input.shift();
  const numList = input.shift().split(' ').map(Number);

  // Logic
  numList.sort((a, b) => a - b);

  let answer = 0;

  let leftIdx = 0;
  let rightIdx = N - 1;

  while (leftIdx < rightIdx) {
    const sumNum = numList[leftIdx] + numList[rightIdx];

    if (sumNum < M) {
      leftIdx += 1;
    } else if (sumNum > M) {
      rightIdx -= 1;
    } else {
      answer += 1;
      leftIdx += 1;
    }
  }
  return answer;
};
console.log(solution(input));

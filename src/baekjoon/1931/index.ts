// For Test with Example
export const input = `5
1 100
2 3
3 4
4 5
5 6`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input.shift();
  const timeLine: number[][] = input
    .map((timeStr: string) => timeStr.split(" ").map(Number))
    .sort(
      ([startTimeA, endTimeA]: number[], [startTimeB, endTimeB]: number[]) =>
        endTimeA !== endTimeB ? endTimeA - endTimeB : startTimeA - startTimeB
    );

  // Logic
  let answer: number = 0;
  let lastEndTime: number = 0;

  for (let i = 0; i < n; i += 1) {
    const [startTime, endTime] = timeLine[i];

    if (lastEndTime <= startTime) {
      lastEndTime = endTime;
      answer++;
    }
  }

  return answer;
};
console.log(solution(input));

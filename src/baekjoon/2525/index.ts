// For Test with Example
export const input = `14 30
20`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

const solution = (input: string[]) => {
  // Initial Setting
  const [hour, minute] = input[0].split(" ").map(Number);
  const addMinute = +input[1];

  // Logic
  const totalMinutes = hour * MINUTES_PER_HOUR + minute + addMinute;

  return `${Math.floor(totalMinutes / MINUTES_PER_HOUR) % HOURS_PER_DAY} ${
    totalMinutes % MINUTES_PER_HOUR
  }`;
};
console.log(solution(input));

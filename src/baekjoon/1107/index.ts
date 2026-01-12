// For Test with Example
export const input = `500000
8
0 2 3 4 6 7 8 9`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const goalChannel = +input[0];
  const brokenButtons: Set<string> = new Set(input[2]?.split(' ') || []);

  // Logic
  let answer = Math.abs(goalChannel - 100);
  const maxChannel = 500000 * 2;

  for (let ch = 0; ch < maxChannel; ch += 1) {
    const chArr = ch.toString().split('');
    if (chArr.some((char) => brokenButtons.has(char))) continue;

    answer = Math.min(answer, chArr.length + Math.abs(goalChannel - ch));
  }

  return answer;
};
console.log(solution(input));

// For Test with Example
export const input = `1
10
0 1 2 3 4 5 6 7 8 9`
  .trim()
  .split("\n"); // [' ' | '\n']

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const brokenButtons: Set<string> = new Set(input[2]?.split(" ") || []);
  let answer: number = Math.abs(n - 100);

  for (let i = 0; i <= 999893; i++) {
    const possible = i.toString();
    let flag = true;

    for (let j = 0; j < possible.length; j++) {
      if (brokenButtons.has(possible[j])) {
        flag = false;
        break;
      }
    }

    if (flag) {
      answer = Math.min(answer, Math.abs(n - i) + possible.length);
    }
  }
  console.log(answer);
};
solution(input);

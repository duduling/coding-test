// For Test with Example
export const input = `0`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  if (n === 0) console.log(0);
  else {
    let answer: number = 0;

    for (let i = 1; i <= n; i += 1) {
      if (i % 5 === 0) answer++;
      if (i % 25 === 0) answer++;
      if (i % 125 === 0) answer++;
    }

    console.log(answer);
  }
};
solution(input);

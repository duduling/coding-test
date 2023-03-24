// For Test with Example
export const input = `26`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const sumFunc = (tmp: number) => {
  return tmp
    .toString()
    .split("")
    .reduce((acc: number, cur: string) => acc + +cur, 0);
};

const solution = (input: string[]) => {
  // Initial Setting
  const n: string = input;

  // Logic
  let sum = 0;
  let i = 0;

  while (true) {
    i++;

    sum = Math.floor(n / 10) + (n % 10);
    n = (n % 10) * 10 + (sum % 10);

    if (input === n) {
      break;
    }
  }

  return answer;
};
console.log(solution(input));

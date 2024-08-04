// For Test with Example
export const input = `7
ststtss`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input[0];
  const cowRiceCake: string = input[1];

  // Logic
  const midpoint: number = N / 2;
  let answer: number = 0;

  for (let i = 0; i < midpoint; i += 1) {
    console.log(cowRiceCake[i], cowRiceCake[N - (i + 1)]);
    if (cowRiceCake[i] !== cowRiceCake[N - (i + 1)]) {
      answer += 1;
    }
  }

  return answer;
};
console.log(solution(input));

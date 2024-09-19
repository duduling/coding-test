// For Test with Example
export const input = `4 5
5 4
4 4`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [bessieY, bessieX] = input[0].split(" ").map(Number);
  const [daisyY, daisyX] = input[1].split(" ").map(Number);
  const [johnY, johnX] = input[2].split(" ").map(Number);

  // Logic
  const resultDaisy = Math.abs(daisyY - johnY) + Math.abs(daisyX - johnX);

  const remainBessieY = Math.abs(bessieY - johnY);
  const remainBessieX = Math.abs(bessieX - johnX);
  const resultBessie =
    remainBessieY + remainBessieX - Math.min(remainBessieY, remainBessieX);

  const answer = resultBessie - resultDaisy;

  return 0 < answer ? "daisy" : answer < 0 ? "bessie" : "tie";
};
console.log(solution(input));

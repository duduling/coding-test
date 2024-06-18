// For Test with Example
export const input = `3
1000036000099
1500035500153
20000000000002`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();
  const MAX_NUMBER: bigint = BigInt(Math.pow(10, 6));
  const ZERO_NUMBER: bigint = BigInt(0);

  // Logic
  const answer: ("YES" | "NO")[] = [];

  for (let i = 0; i < N; i += 1) {
    const curNum: bigint = BigInt(input[i]);

    for (let j = 2; j <= MAX_NUMBER; j += 1) {
      const bigJ: bigint = BigInt(j);

      if (curNum % bigJ === ZERO_NUMBER) {
        answer.push("NO");
        break;
      }

      if (bigJ === MAX_NUMBER) {
        answer.push("YES");
      }
    }
  }
  return answer.join("\n");
};
console.log(solution(input));

// For Test with Example
export const input = `3
26 40 83
49 60 57
13 89 99`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();

  // Logic
  const HOME_LIST: number[][] = input.map((str) => str.split(" ").map(Number));

  const dp: number[][] = Array.from({ length: N }, () => Array(3));

  const checkMinCost = (curIdx: number) => {
    const [preR, preG, preB] = dp[curIdx - 1];
    const [curR, curG, curB] = HOME_LIST[curIdx];

    return [
      curR + Math.min(preG, preB),
      curG + Math.min(preR, preB),
      curB + Math.min(preR, preG),
    ];
  };

  dp[0] = [...HOME_LIST[0]];

  for (let i = 1; i < N; i += 1) {
    dp[i] = checkMinCost(i);
  }

  return Math.min(...dp[N - 1]);
};

console.log(solution(input));

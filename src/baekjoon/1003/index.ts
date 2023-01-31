// For Test with Example
export const input = `3
0
1
3`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  const memoMap = new Map<number, number[]>();
  memoMap.set(0, [1, 0]);
  memoMap.set(1, [0, 1]);

  const fibonacci = (n: number): number[] => {
    if (memoMap.has(n)) return memoMap.get(n);

    const [aa, ab]: number[] = fibonacci(n - 1);
    const [ba, bb]: number[] = fibonacci(n - 2);

    const result: number[] = [aa + ba, ab + bb];

    memoMap.set(n, result);
    return result;
  };

  fibonacci(40);

  // Initial Setting
  const n = +input[0];

  // Logic
  const logArr: string[] = [];
  for (let j = 1; j <= n; j += 1) {
    logArr.push(memoMap.get(+input[j]).join(" "));
  }

  console.log(logArr.join("\n"));
};
solution(input);

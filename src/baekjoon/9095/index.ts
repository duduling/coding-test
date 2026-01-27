// For Test with Example
export const input = `3
4
7
10`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  input.shift();

  const numberList: number[] = input.map(Number);

  // Logic
  const cntList: number[] = [0, 1, 2, 4];
  return numberList
    .map((n: number) => {
      for (let j = 4; j <= n; j++) {
        cntList[j] = cntList[j - 3] + cntList[j - 2] + cntList[j - 1];
      }

      return cntList[n];
    })
    .join("\n");
};
console.log(solution(input));

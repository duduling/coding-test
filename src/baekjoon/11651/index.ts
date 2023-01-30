// For Test with Example
export const input = `5
0 4
1 2
1 -1
2 2
3 3`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  input.shift();

  // Logic
  const convertInput = input.map((val: string) => {
    const [n, m] = val.split(" ");
    return [+n, +m];
  });

  convertInput.sort(
    ([aa, ab]: number[], [ba, bb]: number[]) => ab - bb || aa - ba
  );

  console.log(
    convertInput.map((numArr: number[]) => numArr.join(" ")).join("\n")
  );
};
solution(input);

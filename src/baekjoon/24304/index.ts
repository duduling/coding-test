// For Test with Example
export const input = `260000
4
20000 5
30000 2
10000 6
5000 8`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const totalPrice = +input.shift();

  // Logic
  let realPrice = 0;

  for (let i = 1; i <= +input[0]; i += 1) {
    const [price, count] = input[i].split(" ").map(Number);

    realPrice += price * count;
  }

  return totalPrice === realPrice ? "Yes" : "No";
};
console.log(solution(input));

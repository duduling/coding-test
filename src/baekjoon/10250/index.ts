// For Test with Example
export const input = `2
6 12 10
30 50 72`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  for (let i = 1; i <= n; i++) {
    const [h, w, customer]: number[] = input[i]
      .split(" ")
      .map((val: string) => +val);

    console.log(
      (customer % h || h) + `${Math.ceil(customer / h)}`.padStart(2, "0")
    );
  }
};
solution(input);

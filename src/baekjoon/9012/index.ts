// For Test with Example
export const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  for (let i = 1; i <= n; i += 1) {
    const parenthesisString: string = input[i];
    let cnt: number = 0;

    for (let l = 0; l < parenthesisString.length; l += 1) {
      const curParenthesis = parenthesisString[l];

      if (curParenthesis === "(") {
        cnt += 1;
      } else if (curParenthesis === ")") {
        cnt -= 1;
      }

      if (cnt < 0) break;
    }

    console.log(cnt === 0 ? "YES" : "NO");
  }
};
solution(input);

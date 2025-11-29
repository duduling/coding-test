// For Test with Example
export const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    let stackCnt: number = 0;
    const questionStr: string = input[i];

    for (let l = 0; l < questionStr.length; l++) {
      if (questionStr[l] === '(') {
        stackCnt += 1;
      } else {
        stackCnt -= 1;

        if (stackCnt < 0) break;
      }
    }

    answer.push(stackCnt === 0 ? 'YES' : 'NO');
  }

  console.log(answer.join('\n'));
};
solution(input);

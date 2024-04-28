// For Test with Example
export const input = ``.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = input.length - 1;

  // Logic
  const answer: string[] = [];

  for (let i = 0; i < N; i += 1) {
    const stack: string[] = [];
    let isValid = true;
    const row = input[i];

    for (let j = 0; isValid && j < row.length; j += 1) {
      const char: string = row[j];

      switch (char) {
        case "(":
        case "[": {
          stack.push(char);
          break;
        }
        case ")": {
          const popBracket = stack.pop();

          if (popBracket !== "(") {
            isValid = false;
          }
          break;
        }
        case "]": {
          const popBracket = stack.pop();
          if (popBracket !== "[") {
            isValid = false;
          }
          break;
        }

        default:
          break;
      }
    }

    answer.push(isValid && stack.length === 0 ? "yes" : "no");
  }

  return answer.join("\n");
};
console.log(solution(input));

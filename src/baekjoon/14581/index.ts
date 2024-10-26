// For Test with Example
export const input = ``.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const FAN = ":fan:";
  const name: string = `:${input.shift()}:`;

  // Logic
  let answer: string = "";

  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      answer += i === 1 && j === 1 ? name : FAN;
    }
    answer += "\n";
  }

  return answer;
};

console.log(solution(input));

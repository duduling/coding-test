// For Test with Example
export const input = `5
55 185
58 183
88 186
60 175
46 155`
  .trim()
  .split("\n"); // [' ' | '\n']

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = Number(input.shift());
  const physicalList: number[][] = input.map((infoStr) =>
    infoStr.split(" ").map(Number)
  );

  // Logic
  const answer: number[] = new Array(N).fill(1);

  for (let i = 0; i < N; i += 1) {
    const [standardWeight, standardHeight]: number[] = physicalList[i];

    for (let j = 0; j < N; j += 1) {
      if (i === j) continue;

      const [targetWeight, targetHeight]: number[] = physicalList[j];

      if (standardWeight < targetWeight && standardHeight < targetHeight) {
        answer[i] += 1;
      }
    }
  }

  return answer.join("\n");
};
console.log(solution(input));

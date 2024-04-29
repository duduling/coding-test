// For Test with Example
export const input = `3 4 99
0 0 0 0
0 0 0 0
0 0 0 1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const workResult = (
  blockMap: number[][],
  targetHeight: number,
  rmainBlock: number
) => {
  let time = 0;

  for (let i = 0; i < blockMap.length; i += 1) {
    const row = blockMap[i];
    for (let j = 0; j < row.length; j += 1) {
      const workTime = targetHeight - row[j];
      const absWorkTime = Math.abs(workTime);

      if (0 < workTime) {
        time += absWorkTime;
        rmainBlock -= absWorkTime;
      } else {
        time += absWorkTime * 2;
        rmainBlock += absWorkTime;
      }
    }
  }

  return 0 <= rmainBlock ? time : Number.MAX_SAFE_INTEGER;
};
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M, B]: number[] = input[0].split(" ").map(Number);
  const blockMap: number[][] = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );
  let minHeight = 256;
  let maxHeight = 0;

  // Logic\
  for (let i = 1; i <= N; i += 1) {
    const row: number[] = input[i].split(" ").map(Number);

    for (let j = 0; j < M; j += 1) {
      const curHeight = row[j];
      blockMap[i - 1][j] = curHeight;

      if (curHeight < minHeight) {
        minHeight = curHeight;
      }
      if (maxHeight < curHeight) {
        maxHeight = curHeight;
      }
    }
  }

  let answerTime: number = Number.MAX_SAFE_INTEGER;
  let answerHeight: number = 0;

  for (let k = minHeight; k <= maxHeight; k += 1) {
    const totalTime = workResult(blockMap, k, B);

    if (totalTime <= answerTime) {
      answerTime = totalTime;
      answerHeight = k;
    }
  }

  return `${answerTime} ${answerHeight}`;
};
console.log(solution(input));

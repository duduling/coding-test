// For Test with Example
export const input = ``.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const totalScoreCnt: number = Number(input.shift());
  const sortScoreList: number[] = input.map(Number).sort((a, b) => a - b);

  // Logic
  const removeScoreCnt: number = Math.round((totalScoreCnt / 100) * 15);
  if (totalScoreCnt - removeScoreCnt * 2 <= 0) return 0;

  const targetScoreList: number[] = sortScoreList.slice(
    removeScoreCnt,
    totalScoreCnt - removeScoreCnt
  );
  return Math.round(
    targetScoreList.reduce((acc, cur) => acc + cur, 0) / targetScoreList.length
  );
};
console.log(solution(input));

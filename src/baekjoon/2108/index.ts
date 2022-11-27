// For Test with Example
export const input = `5
-1
-2
-3
-1
-2`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = +input[0];

  // Logic
  const numList: number[] = [];

  let totalSum: number = 0;
  const modeNumObj: {
    [key: number]: number;
  } = {};
  for (let i = 1; i <= n; i++) {
    const tmpNum = +input[i];

    numList.push(tmpNum);

    totalSum += tmpNum;
    modeNumObj[tmpNum] = (modeNumObj[tmpNum] || 0) + 1;
  }
  numList.sort((a, b) => a - b);
  const sortedModeObj = Object.keys(modeNumObj).sort(
    (a, b) => modeNumObj[+b] - modeNumObj[+a] || +a - +b
  );

  const meanNum = Math.round(totalSum / n);
  const medianNum = numList[Math.floor(n / 2)];
  const modeNum =
    +sortedModeObj[
      modeNumObj[+sortedModeObj[0]] !== modeNumObj[+sortedModeObj[1]] ? 0 : 1
    ];
  const rangeNum = numList[n - 1] - numList[0];

  console.log(meanNum);
  console.log(medianNum);
  console.log(modeNum);
  console.log(rangeNum);
};
solution(input);

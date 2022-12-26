// For Test with Example
export const input = `10 500
93 181 245 214 315 36 185 138 216 295`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [nStr, mStr] = input;
  const m: number = +nStr.split(" ")[1];
  const numberList: number[] = mStr.split(" ").map((val: string) => +val);

  // Logic
  let answer = 0;

  for (let i = 0; i < numberList.length - 2; i++) {
    for (let j = i + 1; j < numberList.length - 1; j++) {
      for (let k = j + 1; k < numberList.length; k++) {
        const tmp = numberList[i] + numberList[j] + numberList[k];

        if (tmp === m) {
          answer = tmp;
          break;
        } else if (tmp < m) answer = Math.max(answer, tmp);
      }
    }
  }
  console.log(answer);
};
solution(input);

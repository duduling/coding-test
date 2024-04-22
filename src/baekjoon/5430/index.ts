// For Test with Example
export const input = `4
RDD
4
[1,2,3,4]
DD
1
[42]
RRD
6
[1,1,2,3,5,8]
D
0
[]`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n = Number(input.shift());

  // Logic
  const answer = [];
  for (let i = 0; i < n; i += 1) {
    const curIdx = i * 3;

    const commands = input[curIdx];
    const arrayLength = Number(input[curIdx + 1]);
    const array = JSON.parse(input[curIdx + 2]);

    let isReversed = false;
    let frontIdx = 0;
    let backIdx = 0;

    for (let i = 0; i < commands.length; i += 1) {
      const command = commands[i];

      if (command === "R") {
        isReversed = !isReversed;
      } else {
        if (frontIdx + backIdx + 1 <= arrayLength) {
          isReversed ? ++backIdx : ++frontIdx;
        } else {
          answer.push("error");
          break;
        }
      }
    }
    if (answer.length <= i) {
      const slicedArray: number[] = array.slice(
        frontIdx,
        arrayLength - backIdx
      );

      if (isReversed) {
        slicedArray.reverse();
      }

      answer.push(JSON.stringify(slicedArray));
    }
  }
  return answer.join("\n");
};
console.log(solution(input));

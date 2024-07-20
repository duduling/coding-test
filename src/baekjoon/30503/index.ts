// For Test with Example
export const input = `
10
1 5 5 5 3 2 1 1 10 2
6
1 1 10 3
1 2 7 5
2 3 5
1 1 3 5
2 4 7
1 1 10 1`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input[0];
  const flowerList = input[1].split(" ").map(Number);
  const M: number = +input[2];

  // Logic
  const answer: number[] = [];

  for (let i = 0; i < M; i += 1) {
    const [actionType, startIdx, endIdx, targetFlower]: number[] = input[i + 3]
      .split(" ")
      .map(Number);

    switch (actionType) {
      case 1: {
        let count = 0;
        for (let l = startIdx - 1; l < endIdx; l += 1) {
          if (flowerList[l] === targetFlower) {
            count += 1;
          }
        }
        answer.push(count);
        break;
      }

      case 2: {
        for (let l = startIdx - 1; l < endIdx; l += 1) {
          flowerList[l] = 0;
        }
        break;
      }

      default:
        break;
    }
  }
  return answer.join("\n");
};
console.log(solution(input));

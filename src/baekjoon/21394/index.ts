// For Test with Example
export const input = `4
0 0 0 0 0 2 1 1 1
1 1 1 1 1 1 1 1 1
1 1 3 0 0 0 0 0 0
1 2 2 0 0 0 0 0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();

  // Logic
  const numList: number[][] = Array.from({ length: N }, () => []);

  for (let i = 0; i < input.length; i += 1) {
    const curList: number[] = input[i].split(" ").map(Number);
    for (let j = 0; j < 9; j += 1) {
      if (j !== 5) {
        numList[i].push(...Array(curList[j]).fill(j + 1));
      }
    }
    numList[i].push(...Array(curList[5]).fill(9));
  }

  const answer: number[][] = Array.from({ length: N }, () => []);

  for (let k = 0; k < numList.length; k += 1) {
    const tmpList: number[] = numList[k];
    answer[k].push(tmpList[0]);

    for (let l = 1; l < tmpList.length; l += 1) {
      if (l % 2 === 0) {
        answer[k].unshift(tmpList[l]);
      } else {
        answer[k].push(tmpList[l]);
      }
    }
  }

  return answer.map((arr) => arr.join(" ")).join("\n");
};
console.log(solution(input));

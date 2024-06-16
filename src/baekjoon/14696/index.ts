// For Test with Example
export const input = `5
1 4
4 3 3 2 1
5 2 4 3 2 1
4 4 3 3 1
4 3 2 1 1
4 2 3 2 1
4 4 3 2 1
3 4 3 2
5 4 4 2 3 1
5 4 2 4 1 3`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();

  // Logic
  const answer: string[] = [];

  const PRIORITY_LIST = ["4", "3", "2", "1"] as const;

  for (let i = 0; i < N * 2; i += 2) {
    const aHand: {
      [key: string]: number;
    } = input[i].split(" ").reduce((acc: any, cur, idx) => {
      if (idx !== 0) {
        acc[cur] = (acc[cur] || 0) + 1;
      }
      return acc;
    }, {});

    const bHand: {
      [key: string]: number;
    } = input[i + 1].split(" ").reduce((acc: any, cur, idx) => {
      if (idx !== 0) {
        acc[cur] = (acc[cur] || 0) + 1;
      }
      return acc;
    }, {});

    let result = "D";
    for (let l = 0; l < PRIORITY_LIST.length; l += 1) {
      if (
        (!aHand[PRIORITY_LIST[l]] && bHand[PRIORITY_LIST[l]]) ||
        aHand[PRIORITY_LIST[l]] < bHand[PRIORITY_LIST[l]]
      ) {
        result = "B";
        break;
      } else if (
        (!bHand[PRIORITY_LIST[l]] && aHand[PRIORITY_LIST[l]]) ||
        bHand[PRIORITY_LIST[l]] < aHand[PRIORITY_LIST[l]]
      ) {
        result = "A";
        break;
      }
    }

    answer.push(result);
  }

  return answer.join("\n");
};
console.log(solution(input));

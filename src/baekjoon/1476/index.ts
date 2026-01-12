// For Test with Example
export const input = `15 28 19`.trim().split(' '); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [E, S, M] = input.map(Number);

  // Logic
  let curYear = 1;
  let [curE, curS, curM] = [1, 1, 1];

  while (true) {
    if (curE === E && curS === S && curM === M) return curYear;

    curE = (curE % 15) + 1;
    curS = (curS % 28) + 1;
    curM = (curM % 19) + 1;

    curYear += 1;
  }
};
console.log(solution(input));

// TS convert to Python 3
// import sys

// input = sys.stdin.read().strip().split()

// def solution(input):
//     E, S, M = map(int, input)

//     curYear = 1
//     curE, curS, curM = 1, 1, 1

//     while True:
//         if curE == E and curS == S and curM == M:
//             return curYear

//         curE = (curE % 15) + 1
//         curS = (curS % 28) + 1
//         curM = (curM % 19) + 1

//         curYear += 1

// print(solution(input))

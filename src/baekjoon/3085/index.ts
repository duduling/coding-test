// For Test with Example
export const input = `4
PPPP
CYZY
CCPY
PPCC`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();
  const boomMap = input.map(str => str.split(''))

  // Logic
  let answer = 0

  const checkList = (arr: string[]) => {
    let result = 0

    let tmp = 1
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i - 1] === arr[i]) {
        tmp += 1
      } else {
        result = Math.max(result, tmp)
        tmp = 1
      }
    }

    return Math.max(result, tmp)
  }

  for (let i = 0; i < N; i += 1) {
    for (let k = 0; k < N; k += 1) {
      if (boomMap?.[i + 1]?.[k]) {
        [boomMap[i][k], boomMap[i + 1][k]] = [boomMap[i + 1][k], boomMap[i][k]]

        answer = Math.max(answer,
          checkList(boomMap[i]),
          checkList(boomMap[i + 1]),
          checkList(boomMap.map(row => row[k])),
        );

        [boomMap[i + 1][k], boomMap[i][k]] = [boomMap[i][k], boomMap[i + 1][k]];
      }

      if (boomMap?.[i]?.[k + 1]) {
        [boomMap[i][k], boomMap[i][k + 1]] = [boomMap[i][k + 1], boomMap[i][k]]

        answer = Math.max(answer,
          checkList(boomMap[i]),
          checkList(boomMap.map(row => row[k])),
          checkList(boomMap.map(row => row[k + 1])),
        );

        [boomMap[i][k + 1], boomMap[i][k]] = [boomMap[i][k], boomMap[i][k + 1]]
      }
    }
  }

  return answer
}
console.log(solution(input));

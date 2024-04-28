// For Test with Example
export const input = `3
49
ENTJ INTP ESFJ
4
ESFP ESFP ESFP ESFP
5
INFP INFP ESTP ESTJ ISTJ`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  const getDistance = (personA: string, personB: string) => {
    let distance: number = 0;

    for (let i = 0; i < 4; i += 1) {
      if (personA[i] !== personB[i]) {
        distance += 1;
      }
    }
    return distance;
  };

  const answer: number[] = [];

  for (let j = 1; j <= n; j += 1) {
    const personCnt = +input[j * 2 - 1];
    const personList: string[] = input[j * 2].split(" ");

    let bestTotalDistance = Number.MAX_SAFE_INTEGER;

    if (48 <= personCnt) {
      answer.push(0);
      continue;
    }

    for (let i = 0; i < personCnt - 2; i += 1) {
      for (let j = i + 1; j < personCnt - 1; j += 1) {
        for (let k = j + 1; k < personCnt; k += 1) {
          const totalDifference =
            getDistance(personList[i], personList[j]) +
            getDistance(personList[j], personList[k]) +
            getDistance(personList[k], personList[i]);

          bestTotalDistance = Math.min(bestTotalDistance, totalDifference);
        }
      }
    }

    answer.push(bestTotalDistance);
  }
  return answer.join("\n");
};

console.log(solution(input));

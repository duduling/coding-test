// #region - 01.가장 긴 공통 접두사
// function solution(strs) {
//   if (strs.length === 0) return "";

//   let prefix = "";
//   const minLength = Math.min(...strs.map((str) => str.length));

//   for (let i = 0; i < minLength; i++) {
//     const char = strs[0][i];
//     if (strs.every((str) => str[i] === char)) {
//       prefix += char;
//     } else {
//       break;
//     }
//   }

//   return prefix;
// }
// #endregion

// #region - 02.격자 위의 경로
// function solution(r, c) {
//   const DP = Array.from({ length: r }, () => Array(c).fill(1));

//   for (let i = 1; i < r; i++) {
//     for (let l = 1; l < c; l++) {
//       DP[i][l] = DP[i - 1][l] + DP[i][l - 1];
//     }
//   }

//   return DP[r - 1][c - 1];
// }
// console.log(solution(2, 4, 4));
// #endregion

// #region - 03.증가 구간 만들기
// function solution(p) {
//   const numObj = p.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;

//     return acc;
//   }, {});

//   const answer = [];

//   Object.keys(numObj).map((key) => {
//     for (let i = 0; i < numObj[key]; i++) {
//       answer[i] = (answer[i] || 0) + 1;
//     }
//   });

//   return answer.reduce((acc, cur) => acc + (cur - 1), 0);
// }
// console.log(solution([3, 2, 1, 4, 5])); // 4
// console.log(solution([20, 10, 10, 20])); // 2
// console.log(solution([103, 101, 103, 103, 101, 102, 100, 100, 101, 104])); // 7
// #endregion

// #region - 04.트럭
function solution(M, load) {
  load.sort((a, b) => b - a);

  if (load[0] > M) return -1;

  const trucks = [];

  for (let i = 0; i < load.length; i++) {
    let isNew = true;

    const curWeight = load[i];

    for (let l = 0; l < trucks.length; l++) {
      if (trucks[l] + curWeight <= M) {
        trucks[l] += curWeight;
        isNew = false;
        break;
      }
    }

    if (isNew) {
      trucks.push(curWeight);
    }
  }

  return trucks.length;
}

console.log(
  solution(100, [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 45, 2, 2, 2, 2, 2])
);
// #endregion

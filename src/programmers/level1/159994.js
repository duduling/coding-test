// #region - Legacy
// function solution(cards1, cards2, goal) {
//     let takeWordCnt = 0;

//     for (let i = 0; i < goal.length; i++) {
//       const searchChar = goal[i];

//       const card1Char = cards1[0];
//       if (card1Char === searchChar) {
//         cards1 = cards1.slice(1);
//         takeWordCnt++;
//         continue;
//       }

//       const card2Char = cards2[0];
//       if (card2Char === searchChar) {
//         cards2 = cards2.slice(1);
//         takeWordCnt++;
//         continue;
//       }

//       break;
//     }

//     return takeWordCnt === goal.length ? "Yes" : "No";
//   }
// #endregion

// #region - Refactor
// function solution(cards1, cards2, goal) {
//   for (let i = 0; i < goal.length; i++) {
//     const searchChar = goal[i];

//     if (searchChar === cards1[0]) {
//       cards1.shift();
//     } else if (searchChar === cards2[0]) {
//       cards2.shift();
//     } else {
//       return "No";
//     }
//   }
//   return "Yes";
// }
// #endregion

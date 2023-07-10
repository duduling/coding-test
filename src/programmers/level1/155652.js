// #region - 첫번째 풀이
// function solution(s, skip, index) {
//   const skipCharListSet = new Set(
//     skip.split("").map((str) => str.charCodeAt())
//   );

//   let answer = "";

//   for (const charS of s) {
//     let charCodeS = charS.charCodeAt();

//     for (let i = 0; i < index; i += 1) {
//       charCodeS += 1;

//       if (122 < charCodeS) {
//         charCodeS -= 26;
//       }
//       if (skipCharListSet.has(charCodeS)) {
//         i -= 1;
//       }
//     }

//     answer += String.fromCharCode(charCodeS);
//   }

//   return answer;
// }
// #endregion

// #region - 두번째 풀이
// function solution(s, skip, index) {
//   const skipListSet = new Set(skip);
//   const alphabetList = Array.from({ length: 26 }, (_, idx) =>
//     String.fromCharCode(idx + 97)
//   ).filter((char) => !skipListSet.has(char));

//   return s
//     .split("")
//     .map(
//       (char) =>
//         alphabetList[
//           (alphabetList.findIndex((tmpChar) => tmpChar === char) + index) %
//             alphabetList.length
//         ]
//     )
//     .join("");
// }
// #endregion

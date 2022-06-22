// #region - Frequency Counter - sameFrequency
// function sameFrequency(a, b) {
//   if (a.length !== b.length) return false;

//   a = `${a}`;
//   b = `${b}`;

//   let convertObjA = {};
//   for (let i = 0; i < a.length; i++) {
//     const tempNumA = a[i];
//     convertObjA[tempNumA] = convertObjA[tempNumA]
//       ? convertObjA[tempNumA] + 1
//       : 1;
//   }

//   for (let i = 0; i < b.length; i++) {
//     const tempNumB = b[i];

//     if (convertObjA[tempNumB]) {
//       if (convertObjA[tempNumB] > 1) {
//         convertObjA[tempNumB] = convertObjA[tempNumB] - 1;
//       } else {
//         delete convertObjA[tempNumB];
//       }
//     } else {
//       return false;
//     }
//   }
//   return JSON.stringify(convertObjA) === "{}";
// }
// #endregion

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

// #region - Frequency Counter / Multiple Pointers - areThereDuplicates
// function areThereDuplicates() {
//   const originalArr = Object.values(arguments);
//   const cleanOverlapSet = new Set(originalArr);

//   return originalArr.length !== cleanOverlapSet.size;
// }
// #endregion

// #region - Multiple Pointers - averagePair
// function averagePair(list, avgValue) {
//   let smallNumIdx = 0;
//   let bigNumIdx = list.length - 1;

//   while (smallNumIdx < bigNumIdx) {
//     const tempAvgValue = (list[smallNumIdx] + list[bigNumIdx]) / 2;

//     if (tempAvgValue === avgValue) {
//       return true;
//     } else if (tempAvgValue < avgValue) {
//       smallNumIdx += 1;
//     } else if (tempAvgValue > avgValue) {
//       bigNumIdx -= 1;
//     }
//   }

//   return false;
// }
// #endregion

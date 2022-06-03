// #region - Binary Gap
// function solution(N) {
//   const lastZepCleanBinary = N.toString(2).replace(/[0]*$/, "");
//   return Math.max(...lastZepCleanBinary.split("1").map((num) => num.length));
// }
// #endregion

// #region - Cyclic Rotation
// function solution(A, K) {
//   if (A.length < 2 || K === 0) return A;

//   const cleanLoopCount = K % A.length;
//   K = cleanLoopCount === 0 ? K : cleanLoopCount;
//   return [...A.slice(-K), ...A.slice(0, A.length - K)];
// }
// #endregion

// #region - Odd Occurrences In Array
// function solution(A) {
//   const answer = Object.keys(
//     A.reduce((acc, cur) => {
//       if (acc[cur]) {
//         delete acc[cur];
//       } else {
//         acc[cur] = true;
//       }
//       return acc;
//     }, {})
//   )[0];

//   return Number(answer);
// }
// #endregion

// #region - FrogJmp
// function solution(X, Y, D) {
// return Math.ceil((Y - X) / D);
// }
// #endregion

// #region - PermMissingElem
// function solution(A) {
//   const totalNum = A.length + 1;
//   const totalSum = ((totalNum + 1) * totalNum) / 2;

//   return A.reduce((acc, cur) => acc - cur, totalSum);
// }
// #endregion

// #region - TapeEquilibrium
// function solution(A) {
//   let totalSum = 0;
//   let versusSum = A.reduce((acc, cur) => acc + cur, 0);
//   let answer = Infinity;

//   for (let i = 0; i < A.length - 1; i++) {
//     totalSum += A[i];
//     versusSum -= A[i];

//     if (totalSum === versusSum) {
//       answer = 0;
//       break;
//     }

//     answer = Math.min(answer, Math.abs(totalSum - versusSum));
//   }

//   return answer;
// }
// #endregion

// #region - FrogRiverOne
// function solution(X, A) {
//   const answer = new Set();

//   for (let i = 0, listLength = A.length; i < listLength; i++) {
//     answer.add(A[i]);

//     if (answer.size === X) return i;
//   }

//   return -1;
// }
// #endregion

// #region - PermCheck
// function solution(A) {
//   let totalSum = ((A.length + 1) * A.length) / 2;
//   const removeOverlapList = new Set(A);

//   removeOverlapList.forEach((num) => {
//     totalSum -= num;
//   });

//   return totalSum === 0 ? 1 : 0;
// }
// #endregion

// #region - MaxCounters
// function solution(N, A) {
//   let preMaxCount = false
//   let maxSequence = 0
//   const answer = new Array(N).fill(0);

//   A.forEach((cur) => {
//     if (cur === N + 1) {
//       const result = preMaxCount ? answer : answer.fill(maxSequence)
//       preMaxCount = true
//       return result;
//     }
//     preMaxCount = false
//     answer[cur - 1] += 1;
//     maxSequence = Math.max(maxSequence, answer[cur - 1])
//   });
//   return answer;
// }
// #endregion

// #region - MissingInteger
// function solution(A) {
//   let answer = 1;
//   const removeOverlapSet = new Set(A);

//   for (const value of removeOverlapSet) {
//     if (!removeOverlapSet.has(answer)) break;
//     answer += 1;
//   }
//   return answer;
// }
// #endregion

// #region - PassingCars
// function solution(A) {
//   const totalCarLength = A.length;

//   let answer = 0;
//   let accZeroCount = 0;

//   for (let i = 0; i < totalCarLength; i++) {
//     if (A[i] === 0) {
//       answer = answer + (A.length - 1) - i - accZeroCount;
//       accZeroCount += 1;
//     }
//   }

//   return 1000000000 < answer ? -1 : answer;
// }
// #endregion

// #region - CountDiv
// function solution(A, B, K) {
//   return Math.floor(B / K) - Math.floor((A - 1) / K);
// }
// #endregion

// #region - GenomicRangeQuery
// function solution(S, P, Q) {
//   return P.map((startIdx, idx) => {
//     const endIdx = Q[idx] + 1;
//     const temp = S.slice(startIdx, endIdx);

//     return temp.indexOf("A") !== -1
//       ? 1
//       : temp.indexOf("C") !== -1
//       ? 2
//       : temp.indexOf("G") !== -1
//       ? 3
//       : 4;
//   });
// }
// #endregion

// #region - MinAvgTwoSlice
// function solution(A) {
//   let answer = 0;
//   let accNum = (A[0] + A[1]) / 2;

//   for (let i = 2, listLength = A.length; i < listLength; i++) {
//     const preCurAvg = (A[i - 1] + A[i]) / 2;

//     if (accNum > preCurAvg) {
//       accNum = preCurAvg;
//       answer = i - 1;
//     }
//     if (A[i + 1]) {
//       const preCurNextAvg = (A[i - 1] + A[i] + A[i + 1]) / 3;

//       if (accNum > preCurNextAvg) {
//         accNum = preCurNextAvg;
//         answer = i - 1;
//       }
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Distinct
// function solution(A) {
//     return new Set(A).size
// }
// #endregion

// #region - MaxProductOfThree
// function solution(A) {
//   const list = A.sort((a, b) => a - b);
//   const lastIdx = list.length - 1;

//   return Math.max(
//     list[0] * list[1] * list[lastIdx],
//     list[lastIdx] * list[lastIdx - 1] * list[lastIdx - 2]
//   );
// }
// #endregion

// #region - Triangle
// function solution(A) {
//   const sortAscList = [...A].sort((a, b) => a - b);

//   for (
//     let i = 0, sortAscListLength = sortAscList.length;
//     i < sortAscListLength;
//     i++
//   ) {
//     if (sortAscList[i - 2] + sortAscList[i - 1] > sortAscList[i]) return 1;
//   }
//   return 0;
// }
// #endregion

// #region - NumberOfDiscIntersections v1
// function solution(A) {
//   const temp = A.map((radius, idx) => {
//     return {
//       startPoint: idx - radius,
//       endPoint: idx + radius,
//     };
//   }).sort(({ startPoint: aStartPoint }, { startPoint: bStartPoint }) => {
//     return aStartPoint - bStartPoint;
//   });

//   let answer = 0;

//   l: for (let l = 0; l < temp.length; l++) {
//     const { endPoint } = temp[l];
//     for (let i = temp.length - 1; 0 < i; i--) {
//       if (temp[i].startPoint <= endPoint) {
//         answer += i - l;
//         if (answer > 10000000) {
//           break l;
//         }
//         continue l;
//       }
//     }
//   }

//   return answer;
// }
// #endregion

// #region - NumberOfDiscIntersections v2
// function solution(A) {
//   const sortA = A.map((radius, idx) => {
//     return {
//       startPoint: idx - radius,
//       endPoint: idx + radius,
//     };
//   }).sort((a, b) => {
//     return a.startPoint - b.startPoint;
//   });

//   let answer = 0;

//   for (let i = 0, sortALength = sortA.length; i < sortALength; i++) {
//     const { startPoint, endPoint } = sortA[i];

//     for (let l = i + 1; l < sortALength; l++) {
//       if (answer > 10000000) {
//         return -1;
//       }

//       const { startPoint: targetStartPoint } = sortA[l];

//       if (targetStartPoint > endPoint) {
//         break;
//       }

//       if (startPoint <= targetStartPoint && targetStartPoint <= endPoint) {
//         answer += 1;
//       }
//     }
//   }
//   return answer;
// }
// #endregion

// #region - Brackets
// function solution(S) {
//   const START_BRACKET_OBJ = {
//     "[": "]",
//     "{": "}",
//     "(": ")",
//   };

//   const splitS = S.split("");
//   const bracketStack = [];

//   for (let i = 0, splitSLength = splitS.length; i < splitSLength; i++) {
//     const bracket = splitS[i];

//     if (START_BRACKET_OBJ[bracket]) {
//       bracketStack.push(bracket);
//     } else {
//       const popBracket = bracketStack.pop();

//       if (START_BRACKET_OBJ[popBracket] !== bracket) {
//         return 0;
//       }
//     }
//   }
//   return bracketStack.length ? 0 : 1;
// }
// #endregion

// #region - Fish
// function solution(A, B) {
//   let answer = 0;
//   const toUpstreamFishList = [];

//   for (let i = 0, listLength = A.length; i < listLength; i++) {
//     const toFolwingFish = B[i];
//     if (toFolwingFish === 1) {
//       toUpstreamFishList.push(A[i]);
//     } else {
//       if (toUpstreamFishList.length === 0) {
//         answer += 1;
//       } else {
//         while (toUpstreamFishList.length > 0) {
//           const firstFish = toUpstreamFishList[toUpstreamFishList.length - 1];
//           if (firstFish > A[i]) {
//             break;
//           } else {
//             toUpstreamFishList.pop();
//             if (toUpstreamFishList.length === 0) {
//               answer += 1;
//             }
//           }
//         }
//       }
//     }
//   }
//   return toUpstreamFishList.length + answer;
// }
// #endregion

// #region - Nesting
// function solution(S) {
//   const answer = [];

//   for (let i = 0, sLength = S.length; i < sLength; i++) {
//     const curBracket = S[i];

//     if (curBracket === "(") {
//       answer.push(curBracket);
//     } else {
//       const lastBracket = answer.pop();
//       if (lastBracket !== "(") {
//         return 0;
//       }
//     }
//   }

//   return answer.length ? 0 : 1;
// }
// #endregion

// #region - StoneWall
// function solution(H) {
//   let answer = 0;
//   const stoneStack = [];

//   for (let i = 0; i < H.length; i++) {
//     const curStone = H[i];

//     while (
//       stoneStack.length > 0 &&
//       curStone < stoneStack[stoneStack.length - 1]
//     ) {
//       stoneStack.pop();
//     }

//     if (
//       stoneStack.length === 0 ||
//       curStone > stoneStack[stoneStack.length - 1]
//     ) {
//       stoneStack.push(curStone);
//       answer += 1;
//     }
//   }
//   return answer;
// }
// #endregion

// #region - Dominator
// function solution(A) {
//   const temp = A.reduce((acc, cur, idx) => {
//     if (acc[cur]) {
//       acc[cur].push(idx);
//     } else {
//       acc[cur] = [idx];
//     }
//     return acc;
//   }, {});
//   const kjeqlejqwlk = Object.keys(temp).sort(
//     (a, b) => temp[b].length - temp[a].length
//   )[0];

//   return temp[kjeqlejqwlk]
//     ? Number(temp[kjeqlejqwlk].length) > A.length / 2
//       ? temp[kjeqlejqwlk][0]
//       : -1
//     : -1;
// }
// #endregion

// #region - EquiLeader
// function solution(A) {
//   const loopCount = A.length;
//   let answer = 0;

//   let rightobj = {};
//   let leftobj = {};

//   for (let i = 0; i < loopCount; i++) {
//     const cur = A[i];

//     rightobj[cur] = (rightobj[cur] || 0) + 1;
//   }

//   let leftLength = 0;
//   let rightLength = A.length;

//   let leftLeader = 0;
//   let leftLeaderCount = 0;

//   for (let i = 0; i < loopCount; i++) {
//     const cur = A[i];

//     rightobj[cur] -= 1;
//     rightLength -= 1;

//     leftobj[cur] = (leftobj[cur] || 0) + 1;
//     leftLength += 1;

//     if (leftobj[cur] > leftLeaderCount) {
//       leftLeader = cur;
//       leftLeaderCount = leftobj[cur];
//     }

//     if (
//       rightobj[leftLeader] > parseInt(rightLength / 2, 10) &&
//       leftLeaderCount > parseInt(leftLength / 2, 10)
//     ) {
//       answer += 1;
//     }
//   }

//   return answer;
// }
// #endregion

// #region - MaxProfit (Kadane's Algorithm)
// function solution(A) {
//   let answer = 0;
//   let minPrice = A[0];

//   for (let i = 0; i < A.length; i++) {
//     const curPrice = A[i];

//     minPrice = Math.min(minPrice, curPrice);

//     const curProfit = curPrice - minPrice;

//     answer = Math.max(answer, curProfit);
//   }

//   return answer;
// }
// #endregion

// #region - MaxSliceSum (Kadane's Algorithm)
// function solution(A) {
//   let accNum = 0;
//   let answer = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i < A.length; i++) {
//     accNum = Math.max(A[i], accNum + A[i]);

//     answer = Math.max(answer, accNum);
//   }

//   return answer;
// }
// #endregion

// #region - MaxDoubleSliceSum (Kadane's Algorithm)
// function solution(A) {
//   const listLength = A.length;

//   const headSum = new Array(A.length).fill(0);

//   for (let i = 1; i < listLength - 1; i++) {
//     headSum[i] = Math.max(0, headSum[i - 1] + A[i]);
//   }

//   const tailSum = new Array(A.length).fill(0);

//   for (let i = listLength - 2; i >= 1; i--) {
//     tailSum[i] = Math.max(0, tailSum[i + 1] + A[i]);
//   }

//   let maxSum = 0;

//   for (let i = 1; i < listLength - 1; i++) {
//     maxSum = Math.max(maxSum, headSum[i - 1] + tailSum[i + 1]);
//   }

//   return maxSum;
// }
// #endregion

// #region - CountFactors
// function solution(N) {
//   const centerNum = Math.sqrt(N);
//   let answer = 0;

//   for (let i = 1; i < centerNum; i++) {
//     if (N % i === 0) {
//       answer += 1;
//     }
//   }

//   answer *= 2;

//   if (N % centerNum === 0) {
//     answer += 1;
//   }

//   return answer;
// }
// #endregion

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

// #region - Multiple Pointers - isSubsequence
// function isSubsequence(firstCharacters, secondCharacters) {
//   let firstIdx = 0;
//   let secondIdx = 0;

//   for (
//     firstIdx < firstCharacters.length;
//     secondIdx < secondCharacters.length;

//   ) {
//     if (firstCharacters[firstIdx] === secondCharacters[secondIdx]) {
//       firstIdx++;
//     }
//     secondIdx++;
//   }

//   return firstIdx === firstCharacters.length;
// }
// #endregion

// #region - Sliding Window - maxSubarraySum
// function maxSubarraySum(inputArr, limitNum) {
//   if (inputArr.length < limitNum) return null;

//   let maximumNumSum = 0;

//   for (let i = 0; i < limitNum; i++) {
//     maximumNumSum += inputArr[i];
//   }

//   for (let i = limitNum, curNumSum = maximumNumSum; i < inputArr.length; i++) {
//     curNumSum += inputArr[i] - inputArr[i - limitNum];

//     if (maximumNumSum < curNumSum) {
//       maximumNumSum = curNumSum;
//     }
//   }

//   return maximumNumSum;
// }
// #endregion

// #region - Sliding Window - minSubArrayLen
// function minSubArrayLen(numList, limitSum) {
//   let startIdx = 0;
//   let endIdx = 0;
//   let bestAnswer = numList.length + 1;
//   let curTotalSum = 0;

//   while (startIdx <= numList.length) {
//     if (curTotalSum < limitSum && endIdx < numList.length) {
//       curTotalSum += numList[endIdx];
//       endIdx++;
//     } else if (limitSum <= curTotalSum) {
//       bestAnswer = Math.min(bestAnswer, endIdx - startIdx);
//       curTotalSum -= numList[startIdx];
//       startIdx++;
//     } else {
//       break;
//     }
//   }

//   return bestAnswer === numList.length + 1 ? 0 : bestAnswer;
// }
// #endregion

// #region - Sliding Window - findLongestSubstring
// function findLongestSubstring(str) {
//   let answer = 0;
//   let cacheObj = {};
//   let initStartIdx = 0;

//   for (let i = 0; i < str.length; i++) {
//     const curCharacter = str[i];

//     if (cacheObj[curCharacter] > -1) {
//       // 기존의 Init Start Index가 더 작을 수 있음
//       initStartIdx = Math.max(initStartIdx, cacheObj[curCharacter] + 1);
//     }

//     cacheObj[curCharacter] = i;
//     answer = Math.max(answer, i - initStartIdx + 1);
//   }

//   return answer;
// }
// #endregion

// #region - power
// function power(n, count) {
//   if (0 === count) return 1;

//   return n * power(n, --count);
// }
// #endregion

// #region - factorial
// function factorial(num) {
//   if (0 < num) return num * factorial(--num);

//   return 1;
// }
// #endregion

// #region - productOfArray
// function productOfArray(arr) {
//   if (arr.length > 0) {
//     return arr.pop() * productOfArray(arr);
//   }

//   return 1;
// }
// #endregion

// #region - recursiveRange
// function recursiveRange(num) {
//   if (0 < num) {
//     return num + recursiveRange(--num);
//   }

//   return 0;
// }
// #endregion

// #region - fib
// function fib(num) {
//   if (num <= 2) return 1;

//   return fib(num - 1) + fib(num - 2);
// }
// #endregion

// #region - reverse
// function reverse(str) {
//   if (str <= 1) return str;

//   return reverse(str.slice(1)) + str[0];
// }
// #endregion

// #region - isPalindrome
// function isPalindrome(str) {
//   if (str.length <= 1) return true;

//   return str[0] === str[str.length - 1]
//     ? isPalindrome(str.slice(1, str.length - 1))
//     : false;
// }
//#endregion

// #region - someRecursive
// function someRecursive(arr, func) {
//   if (arr.length === 0) return false;

//   return func(arr.pop()) ? true : someRecursive(arr, func);
// }
//#endregion

// #region - someRecursive
// function flatten(arr) {
//   const answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Number.isInteger(arr[i])) {
//       answer.push(arr[i]);
//     } else {
//       answer.push(...flatten(arr[i]));
//     }
//   }

//   return answer;
// }
//#endregion

// #region - capitalizeFirst
// function capitalizeFirst(arr, answer = []) {
//   answer.push(`${arr[0][0].toUpperCase()}${arr[0].slice(1)}`);

//   if (arr.length > 1) {
//     capitalizeFirst(arr.slice(1), answer);
//   }

//   return answer;
// }
//#endregion

// #region - nestedEvenSum
// function nestedEvenSum(obj, answer = 0) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
//       answer += obj[key];
//     } else if (typeof obj[key] === "object") {
//       answer += nestedEvenSum(obj[key]);
//     }
//   }
//   return answer;
// }
//#endregion

// #region - capitalizeWords
// function capitalizeWords(arr) {
//   return arr[0] ? [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))] : [];
// }
//#endregion

// #region - stringifyNumbers
// function stringifyNumbers(obj) {
//   let answer = {};

//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       answer[key] = String(obj[key]);
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       answer[key] = stringifyNumbers(obj[key]);
//     } else {
//       answer[key] = obj[key];
//     }
//   }
//   return answer;
// }
//#endregion

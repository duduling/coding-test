// #region - Ch.01 - 기본문제 풀이

// #region - Ch.01 - 01. 세 수 중 최솟값
// function solution(a, b, c) {
//   let answer = a;

//   if (answer > b) answer = b;
//   if (answer > c) answer = c;

//   return answer;
// }
// #endregion

// #region - Ch.01 - 02. 삼각형 판별하기
// function solution(a, b, c) {
//   const totalNum = a + b + c;
//   let maxNum = a;

//   if (maxNum < b) maxNum = b;
//   if (maxNum < c) maxNum = c;

//   return totalNum - maxNum * 2 > 0 ? "YES" : "NO";
// }
// #endregion

// #region - Ch.01 - 03. 연필 개수
// function solution(n) {
//   return Math.ceil(n / 12);
// }
// #endregion

// #region - Ch.01 - 04. 1부터 N까지 합 출력하기
// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     answer += i;
//   }

//   return answer;
// }
// #endregion

// #region - Ch.01 - 05. 최솟값 구하기
// function solution(arr) {
//   return arr.reduce((a, b) => (a > b ? b : a), Number.MAX_SAFE_INTEGER);
// }
// #endregion

// #region - Ch.01 - 06. 홀수
// function solution(arr) {
//   let sumOddNum = 0;
//   let minOddNum = Number.MAX_SAFE_INTEGER;

//   for (let curNum of arr) {
//     if (curNum % 2) {
//       sumOddNum += curNum;
//       if (curNum < minOddNum) minOddNum = curNum;
//     }
//   }

//   return [sumOddNum, minOddNum];
// }
// #endregion

// #region - Ch.01 - 07. 10부제
// function solution(n, arr) {
//   return arr.reduce((acc, cur) => {
//     if (cur % 10 === n) acc += 1;

//     return acc;
//   }, 0);
// }
// #endregion

// #region - Ch.01 - 08. 일곱 난쟁이
// function solution(arr) {
//   const dwarfList = [...arr];
//   const overNum = dwarfList.reduce((acc, cur) => acc + cur, 0) - 100;

//   for (let i = 0; i < arr.length; i++) {
//     const firstDwarf = dwarfList[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       const secondDwarf = dwarfList[j];

//       if (firstDwarf + secondDwarf === overNum) {
//         dwarfList.splice(i, 1);
//         dwarfList.splice(j, 1);
//       }
//     }
//   }
//   return dwarfList;
// }
// #endregion

// #region - Ch.01 - 09. A를 #으로
// function solution(str) {
//   let answer = "";

//   for (let i = 0; i < str.length; i++) {
//     answer += str[i] === "A" ? "#" : str[i];
//   }

//   return answer;
// }
// #endregion

// #region - Ch.01 - 10. 문자 찾기
// function solution(str, char) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) count++;
//   }

//   return count;
// }
// #endregion

// #region - Ch.01 - 11. 대문자 찾기
// function solution(str) {
//   let answer = 0;

//   for (let i = 0; i < str.length; i++) {
//     const convertAsciiCode = str[i].charCodeAt();
//     if (65 <= convertAsciiCode && convertAsciiCode <= 90) answer++;
//   }

//   return answer;
// }
// #endregion

// #region - Ch.01 - 12. 대문자로 통일
// function solution(str) {
//   let answer = "";

//   for (let i = 0; i < str.length; i++) {
//     const convertAsciiCode = str[i].charCodeAt();

//     answer +=
//       97 <= convertAsciiCode && convertAsciiCode <= 122
//         ? String.fromCharCode(convertAsciiCode - 32)
//         : str[i];
//   }

//   return answer;
// }
// #endregion

// #region - Ch.01 - 13. 대소문자 변환
// function solution(str) {
//   let answer = "";

//   for (let i = 0; i < str.length; i++) {
//     const convertAsciiCode = str[i].charCodeAt();

//     if (65 <= convertAsciiCode && convertAsciiCode <= 90) {
//       answer += String.fromCharCode(convertAsciiCode + 32);
//     } else if (97 <= convertAsciiCode && convertAsciiCode <= 122) {
//       answer += String.fromCharCode(convertAsciiCode - 32);
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Ch.01 - 14. 가장 긴 문자열
// function solution(arr) {
//   return arr.reduce((acc, cur) => (acc.length < cur.length ? cur : acc), "");
// }
// #endregion

// #region - Ch.01 - 15. 가운데 문자 출력
// function solution(str) {
//   const centerIdx = Math.ceil(str.length / 2 - 1);

//   return str.substring(centerIdx, centerIdx + (str.length % 2 ? 1 : 2));
// }
// #endregion

// #region - Ch.01 - 16. 중복문자제거
// function solution(str) {
//   const cacheObj = {};

//   for (let i = 0; i < str.length; i++) {
//     const curChar = str[i];

//     if (!cacheObj[curChar]) cacheObj[curChar] = true;
//   }

//   return Object.keys(cacheObj).join("");
// }
// #endregion

// #region - Ch.01 - 17. 중복단어제거
// function solution(arr) {
//   const cacheObj = {};

//   for (let i = 0; i < arr.length; i++) {
//     const curChar = arr[i];

//     if (!cacheObj[curChar]) cacheObj[curChar] = true;
//   }

//   return Object.keys(cacheObj);
// }
// #endregion

// #endregion

// #region - Ch.02 - 2차원 배열 탐색

// #region - Ch.02 - 01. 큰 수 출력하기
// function solution(n, arr) {
//   const answer = [];

//   arr.reduce((preNum, curNum) => {
//     if (preNum < curNum) answer.push(curNum);

//     return curNum;
//   }, n);

//   return answer;
// }
// #endregion

// #region - Ch.02 - 02. 보이는 학생
// function solution(n, arr) {
//   let answer = 0;

//   arr.reduce((preNum, curNum) => {
//     if (preNum < curNum) {
//       answer++;
//       return curNum;
//     }

//     return preNum;
//   }, n);

//   return answer;
// }
// #endregion

// #region - Ch.02 - 03. 가위 바위 보
// function solution(n, arr1, arr2) {
//   const victoryConditionsObj = {
//     1: 2,
//     2: 3,
//     3: 1,
//   };

//   const scoreList = [];

//   for (let i = 0; i < n; i++) {
//     const tempA = arr1[i];
//     const tempB = arr2[i];

//     if (tempA === tempB) {
//       scoreList.push("D");
//     } else {
//       scoreList.push(victoryConditionsObj[tempA] === tempB ? "B" : "A");
//     }
//   }

//   return scoreList;
// }
// #endregion

// #region - Ch.02 - 04. 점수계산
// function solution(arr) {
//   let answer = 0;

//   arr.reduce((acc, cur) => {
//     const addPoint = cur ? acc + 1 : 0;
//     answer += addPoint;

//     return addPoint;
//   }, 0);

//   return answer;
// }
// #endregion

// #region - Ch.02 - 05. 등수구하기 ver.1
// function solution(arr) {
//   const rankTable = {};

//   [...arr]
//     .sort((a, b) => b - a)
//     .forEach((score, idx) => {
//       const curRank = idx + 1;

//       if (!rankTable[score]) {
//         rankTable[score] = curRank;
//       }
//     });

//   return arr.map((score) => rankTable[score]);
// }
// #endregion

// #region - Ch.02 - 05. 등수구하기 ver.2
// function solution(arr) {
//   const n = arr.length;
//   let answer = new Array(n).fill(1);

//   for (let i = 0; i < n; i++) {
//     const scoreA = arr[i];
//     for (let j = 0; j < n; j++) {
//       const scoreB = arr[j];
//       if (scoreA < scoreB) answer[i]++;
//     }
//   }
//   return answer;
// }
// #endregion

// #region - Ch.02 - 06. 격자판 최대합
// function solution(n, arr) {
//   let answer = 0;

//   for (let i = 0; i < n; i++) {
//     let rowSum = 0;
//     let colSum = 0;
//     for (let j = 0; j < n; j++) {
//       rowSum += arr[i][j];
//       colSum += arr[j][i];
//     }
//     answer = Math.max(answer, rowSum, colSum);
//   }

//   {
//     let leftCrossSum = 0;
//     let rightCrossSum = 0;

//     for (let l = 0; l < n; l++) {
//       leftCrossSum += arr[l][l];
//       rightCrossSum += arr[l][n - l - 1];
//     }
//     answer = Math.max(answer, leftCrossSum, rightCrossSum);
//   }

//   return answer;
// }
// #endregion

// #region - Ch.02 - 07. 봉우리
// function solution(n, arr) {
//   let answer = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       const curHeight = arr[i][j];

//       const eastHeight = arr[i]?.[j - 1] || 0;
//       const westHeight = arr[i]?.[j + 1] || 0;
//       const southHeight = arr[i + 1]?.[j] || 0;
//       const northHeight = arr[i - 1]?.[j] || 0;

//       if (
//         eastHeight < curHeight &&
//         westHeight < curHeight &&
//         southHeight < curHeight &&
//         northHeight < curHeight
//       ) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }
// #endregion

// #endregion

// #region - Ch.03 - 문자열 탐색

// #region - Ch.03 - 01. 회문 문자열
// function solution(str) {
//   const convertToUpperStr = str.toUpperCase();

//   const n = convertToUpperStr.length;
//   const limitNum = Math.floor(n / 2);

//   for (let i = 0; i < limitNum; i++) {
//     if (convertToUpperStr[i] !== convertToUpperStr[n - 1 - i]) return "NO";
//   }

//   return "YES";
// }
// #endregion

// #region - Ch.03 - 02. 유효한 팰린드롬
// function solution(str) {
//   const cleanStr = str.replace(/[^a-zA-z]/g, "").toUpperCase();

//   return cleanStr === cleanStr.split("").reverse().join("") ? "YES" : "NO";
// }
// #endregion

// #region - Ch.03 - 03. 숫자만 추출
// function solution(str) {
//   return Number.parseInt(str.replace(/[^0-9]/g, ""), 10);
// }
// #endregion

// #region - Ch.03 - 04. 가장 짧은 문자거리
// function solution(str, char) {
//   let cacheDistance = 100;
//   let answer = new Array(str.length).fill(0);

//   for (let i = 0; i < str.length; i++) {
//     cacheDistance = str[i] === char ? 0 : ++cacheDistance;

//     answer[i] = cacheDistance;
//   }

//   for (let i = str.length - 1; 0 <= i; i--) {
//     cacheDistance = str[i] === char ? 0 : Math.min(++cacheDistance, answer[i]);

//     answer[i] = cacheDistance;
//   }

//   return answer;
// }
// #endregion

// #region - Ch.03 - 05. 문자열 압축
// function solution(str) {
//   let answer = "";
//   let cache = "";

//   for (let i = 0; i <= str.length; i++) {
//     const targetChar = cache[0];
//     const curChar = str[i];

//     if (cache === "" || targetChar === curChar) {
//       cache += curChar;
//     } else {
//       answer += `${targetChar}${1 < cache.length ? cache.length : ""}`;
//       cache = curChar;
//     }
//   }

//   return answer;
// }
// #endregion

//#endregion

// #region - Ch.04 - 완전탐색(블루투포스)

// #region - Ch.04 - 01. 자릿수의 합
// function solution(arr) {
//   let cacheMaxSumNum = 0;

//   return arr.reduce((acc, cur) => {
//     const sumNum = `${cur}`
//       .split("")
//       .reduce((acc, cur) => acc + Number.parseInt(cur, 10), 0);

//     if (cacheMaxSumNum <= sumNum) {
//       cacheMaxSumNum = sumNum;
//       return Math.max(acc, cur);
//     }
//     return acc;
//   }, 0);
// }
// #endregion

// #region - Ch.04 - 02. 뒤집은 소수
// function solution(arr) {
//   const checkPrimeNum = (num) => {
//     if (num === 1) return false;

//     const squareRootNum = Math.sqrt(num);

//     for (let i = 2; i <= squareRootNum; i++) {
//       if (num % i === 0) return false;
//     }

//     return true;
//   };

//   const answer = [];

//   for (let x of arr) {
//     let reverseNum = 0;

//     while (x) {
//       const remainNum = x % 10;

//       reverseNum = reverseNum * 10 + remainNum;
//       x = parseInt(x / 10, 10);
//     }

//     if (checkPrimeNum(reverseNum)) answer.push(reverseNum);
//   }

//   return answer;
// }
// #endregion

// #region - Ch.04 - 03. 멘토링
// function solution(test) {
//   let answer = 0;

//   let students = test[0].length;
//   let testNum = test.length;

//   for (let i = 1; i <= students; i++) {
//     for (let j = 1; j <= students; j++) {
//       if (i === j) continue;

//       let count = 0;
//       for (let k = 0; k < testNum; k++) {
//         let mentee = 0;
//         let mentor = 0;

//         for (let s = 0; s < students; s++) {
//           if (test[k][s] === i) mentee = s;
//           if (test[k][s] === j) mentor = s;
//         }

//         if (mentee < mentor) count++;
//       }
//       if (count === testNum) answer++;
//     }
//   }
//   return answer;
// }
// #endregion

// #region - Ch.04 - 04. 졸업 선물
// function solution(limitPrice, doubleArr) {
//   let answer = 0;

//   const n = doubleArr.length;
//   const sortedArr = [...doubleArr].sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

//   for (let i = 0; i < n; i++) {
//     let remainPrice = limitPrice - (sortedArr[i][0] / 2 + sortedArr[i][1]);
//     let count = 1;
//     for (let j = 0; j < n; j++) {
//       if (i === j) continue;

//       remainPrice -= sortedArr[j][0] + sortedArr[j][1];
//       if (0 <= remainPrice) {
//         count++;
//       } else {
//         answer = Math.max(answer, count);
//         break;
//       }
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Ch.04 - 05. K번째 큰 수
// function solution(k, arr) {
//   let maxSumList = new Set(); // 총 합이 같은 값을 제거하기 위함

//   const arrLength = arr.length;

//   for (let i = 0; i < arrLength; i++) {
//     for (let j = i + 1; j < arrLength; j++) {
//       for (let m = j + 1; m < arrLength; m++) {
//         maxSumList.add(arr[i] + arr[j] + arr[m]);
//       }
//     }
//   }

//   return Array.from(maxSumList).sort((a, b) => b - a)[k - 1];
// }
// #endregion

// #endregion

// #region - Ch.05 - 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

// #region - Ch.05 - 01. 두 배열 합치기
// function solution(arr1, arr2) {
//   const answer = [];
//   const arr1Length = arr1.length;
//   const arr2Length = arr2.length;

//   let arr1Pointer = 0;
//   let arr2Pointer = 0;
//   while (arr1Pointer < arr1Length && arr2Pointer < arr2Length) {
//     const arr1Value = arr1[arr1Pointer];
//     const arr2Value = arr2[arr2Pointer];

//     if (arr1Value <= arr2Value) {
//       answer.push(arr1[arr1Pointer++]);
//     } else if (arr2Value < arr1Value) {
//       answer.push(arr2[arr2Pointer++]);
//     }
//   }

//   while (arr1Pointer < arr1Length) answer.push(arr1[arr1Pointer++]);
//   while (arr2Pointer < arr2Length) answer.push(arr2[arr2Pointer++]);

//   return answer;
// }
// #endregion

// #region - Ch.05 - 02. 공통원소 구하기
// function solution(arr1, arr2) {
//   const answer = [];

//   const sortedArr1 = [...arr1].sort((a, b) => a - b);
//   const sortedArr2 = [...arr2].sort((a, b) => a - b);

//   for (let i = 0, j = 0; i < arr1.length && j < arr2.length; ) {
//     if (sortedArr1[i] === sortedArr2[j]) {
//       answer.push(sortedArr1[i++]);
//       j++;
//     } else if (sortedArr1[i] < sortedArr2[j]) i++;
//     else if (sortedArr1[i] > sortedArr2[j]) j++;
//   }
//   return answer;
// }
// #endregion

// #region - Ch.05 - 03. 연속 부분수열 1
// function solution(m, arr) {
//   let answer = 0;
//   const arrLength = arr.length;

//   let startPointer = 0;
//   let endPointer = 0;
//   let sumNum = 0;
//   while (endPointer < arrLength) {
//     if (sumNum === m) {
//       answer++;
//       sumNum -= arr[startPointer++];
//       sumNum += arr[++endPointer];
//     } else if (m < sumNum) {
//       sumNum -= arr[startPointer++];
//     } else if (sumNum < m) {
//       sumNum += arr[++endPointer];
//     }
//   }
//   return answer;
// }
// #endregion

// #region - Ch.05 - 04. 연속 부분수열 2
// function solution(m, arr) {
//   let answer = 0;
//   const arrLength = arr.length;

//   next: for (let i = 0; i < arrLength; i++) {
//     let remainNum = m;
//     for (let j = i; j < arrLength; j++) {
//       remainNum -= arr[j];

//       if (0 <= remainNum) answer++;
//       else continue next;
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Ch.05 - 05. 최대 매출
// function solution(k, arr) {
//   let answer = 0;
//   const arrLength = arr.length;

//   for (let i = 0; i < k; i++) answer += arr[i];

//   let curSales = answer;
//   for (let j = k; j < arrLength; j++) {
//     curSales = curSales - arr[j - k] + arr[j];

//     answer = Math.max(answer, curSales);
//   }

//   return answer;
// }
// #endregion

// #region - Ch.05 - 06. 학급 회장(해쉬)
// function solution(arr) {
//   let answer = null;
//   const cacheMap = new Map();

//   for (let candidate of arr) {
//     if (cacheMap.has(candidate))
//       cacheMap.set(candidate, cacheMap.get(candidate) + 1);
//     else cacheMap.set(candidate, 1);
//   }

//   let maxVote = 0;
//   for (let [key, value] of cacheMap) {
//     if (maxVote < value) {
//       answer = key;
//       maxVote = value;
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Ch.05 - 07. 아나그램(해쉬)
// function solution(str1, str2) {
//   const cacheMap = new Map();

//   for (const addChar of str1) {
//     if (cacheMap.has(addChar)) cacheMap.set(addChar, cacheMap.get(addChar) + 1);
//     else cacheMap.set(addChar, 1);
//   }

//   for (const removeChar of str2) {
//     if (!cacheMap.has(removeChar) || cacheMap.get(removeChar) === 0)
//       return "NO";
//     else cacheMap.set(removeChar, cacheMap.get(removeChar) - 1);
//   }

//   return "YES";
// }
// #endregion

// #region - Ch.05 - 08. 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// function solution(strS, strT) {
//   let answer = 0;

//   // str2를 해쉬 값으로 변경
//   const cacheObjStrT = new Map();
//   for (const charT of strT) {
//     if (cacheObjStrT.has(charT))
//       cacheObjStrT.set(charT, cacheObjStrT.get(charT) + 1);
//     else cacheObjStrT.set(charT, 1);
//   }

//   // for문을 돌면서 str2와 같은 길이의 문자열을 해쉬 값으로 변경해서 비교 연산
//   const cacheObjStrS = new Map();
//   next: for (let j = 0; j < strS.length; j++) {
//     const charS = strS[j];
//     if (cacheObjStrS.has(charS))
//       cacheObjStrS.set(charS, cacheObjStrS.get(charS) + 1);
//     else cacheObjStrS.set(charS, 1);

//     const removeCharS = strS[j - strT.length];
//     if (1 < cacheObjStrS.get(removeCharS))
//       cacheObjStrS.set(removeCharS, cacheObjStrS.get(removeCharS) - 1);
//     else cacheObjStrS.delete(removeCharS);

//     for (const [key] of cacheObjStrT) {
//       if (cacheObjStrT.get(key) !== cacheObjStrS.get(key)) continue next;
//     }
//     answer++;
//   }
//   return answer;
// }
// #endregion

// #endregion

// #region - Ch.06 - 자료구조(스택, 큐)

// #region - Ch.06 - 01. 올바른 괄호
// function solution(braketStr: string): "YES" | "NO" {
//   if (braketStr.length % 2 === 1) return "NO";

//   const braketStack: Array<string> = [];

//   for (const bracket of braketStr) {
//     if (bracket === "(") braketStack.push(bracket);
//     else if (braketStack.pop() !== "(") return "NO";
//   }

//   return braketStack.length === 0 ? "YES" : "NO";
// }
// #endregion

// #region - Ch.06 - 02. 괄호문자제거
// function solution(str: string): string {
//   let answer: string = "";

//   const stack: Array<string> = [];
//   for (const char of str) {
//     if (char === "(") stack.push(char);
//     else if (char === ")") stack.pop();
//     else if (stack.length === 0) answer += char;
//   }

//   return answer;
// }
// #endregion

// #region - Ch.06 - 03. 크레인 인형뽑기(카카오 기출)
// function solution(board: Array<Array<number>>, moves: Array<number>): number {
//   let answer: number = 0;

//   const catchDollStack: Array<number> = [];
//   moves.forEach((movePointer) => {
//     for (let i = 0; i < board.length; i++) {
//       const curCatchDoll: number = board[i][movePointer - 1] || 0;

//       if (curCatchDoll) {
//         board[i][movePointer - 1] = 0;

//         // catchDollStack[catchDollStack.length - 1] -> catchDollStack.at(-1)
//         if (curCatchDoll === catchDollStack.at(-1)) {
//           catchDollStack.pop();
//           answer += 2;
//         } else catchDollStack.push(curCatchDoll);

//         break;
//       }
//     }
//   });

//   return answer;
// }
// #endregion

// #region - Ch.06 - 04. 후위식 연산(postfix)
// function solution(str: string): number {
//   const stack: Array<number> = [];
//   for (const tmp of str) {
//     const tempNum: number = Number.parseInt(tmp, 10);

//     if (Number.isInteger(tempNum)) {
//       stack.push(tempNum);
//     } else {
//       const rightVal: number = stack.pop();
//       const leftVal: number = stack.pop();

//       switch (tmp) {
//         case "+":
//           stack.push(leftVal + rightVal);
//           break;
//         case "-":
//           stack.push(leftVal - rightVal);
//           break;
//         case "*":
//           stack.push(leftVal * rightVal);
//           break;
//         case "/":
//           stack.push(leftVal / rightVal);
//           break;

//         default:
//           break;
//       }
//     }
//   }

//   return stack[0];
// }
// #endregion

// #region - Ch.06 - 05. 쇠막대기
// function solution(str: string): number {
//   let answer = 0;
//   const stack: Array<string> = [];

//   for (let i = 0; i < str.length; i++) {
//     const braket: string = str[i];

//     if (braket === "(") stack.push(braket);
//     else {
//       stack.pop();

//       if (str[i - 1] === "(") answer += stack.length;
//       else answer++;
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Ch.06 - 06. 공주 구하기
// function solution(n: number, m: number): number {
//   const queue: Array<number> = Array.from({ length: n }, (_, i) => i + 1);

//   while (1 < queue.length) {
//     for (let i = 1; i < m; i++) queue.push(queue.shift());
//     queue.shift();
//   }

//   return queue[0];
// }
// #endregion

// #region - Ch.06 - 07. 교육과정 설계
// function solution(mySchedule: string, classSchedule: string): "YES" | "NO" {
//   const queue: Array<string> = mySchedule.split("");

//   for (const curLecture of classSchedule) {
//     if (curLecture === queue[0]) queue.shift();
//   }

//   return queue.length === 0 ? "YES" : "NO";
// }
// #endregion

// #endregion

// #region - Ch.07 - 정렬과 그리디, 결정알고리즘(이분검색)

// #region - Ch.07 - 01. 선택정렬
// function solution(arr: Array<number>): Array<number> {
//   for (let i: number = 0; i < arr.length; i++) {
//     let minNumIdx = i;

//     for (let j: number = i + 1; j < arr.length; j++)
//       if (arr[j] < arr[minNumIdx]) minNumIdx = j;

//     [arr[i], arr[minNumIdx]] = [arr[minNumIdx], arr[i]];
//   }

//   return arr;
// }
// #endregion

// #region - Ch.07 - 02. 버블정렬
// function solution(arr: Array<number>): Array<number> {
//   for (let i: number = 0; i < arr.length - 1; i++) {
//     for (let j: number = 0; j < arr.length - i - 1; j++) {
//       if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//     }
//   }
//   return arr;
// }
// #endregion

// #region - Ch.07 - 03. Special Sort(버블정렬응용)
// function solution(arr: Array<number>): Array<number> {
//   let cacheIdx: number = 0;
//   for (let i: number = 0; i < arr.length - 1 - cacheIdx; i++) {
//     for (let j: number = 0 + cacheIdx; j < arr.length - 1; j++) {
//       if (0 < arr[j]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       else cacheIdx++;
//     }
//   }
//   return arr;
// }
// #endregion

// #region - Ch.07 - 04. 삽입정렬
// function solution(arr: Array<number>): Array<number> {
//   for (let i = 0; i < arr.length; i++) {
//     let tempNum: number = arr[i];
//     let j: number;

//     for (j = i - 1; 0 <= j; j--) {
//       if (tempNum < arr[j]) arr[j + 1] = arr[j];
//       else break;
//     }

//     arr[j + 1] = tempNum;
//   }

//   return arr;
// }
// #endregion

// #region - Ch.07 - 05. LRU(카카오 캐시 변형 : 삽입정렬응용)
// Ver.1 → 삽입 정렬
// function solution(arr: Array<number>): Array<number> {
//   const cacheQueue: Array<number> = Array.from({ length: 5 }, () => 0);
//   const n = cacheQueue.length;

//   arr.forEach((data) => {
//     let saved: boolean = false;

//     for (let i = 0; i < n; i++) {
//       if (data === cacheQueue[i]) {
//         for (let j = i; 0 <= j; j--) {
//           cacheQueue[j] = cacheQueue[j - 1];
//         }
//         saved = true;
//       }
//     }

//     if (!saved) {
//       for (let k = n - 1; 0 <= k; k--) {
//         cacheQueue[k] = cacheQueue[k - 1];
//       }
//     }

//     cacheQueue[0] = data;
//   });

//   return cacheQueue;
// }

// Ver.2 → 내장 함수
// function solution(arr: Array<number>): Array<number> {
//   const cacheQueue: Array<number> = Array.from({ length: 5 }, () => 0);
//   const n = cacheQueue.length;

//   arr.forEach((data) => {
//     for (let i = 0; i < n; i++) {
//       if (data === cacheQueue[i]) cacheQueue.splice(i, 1);
//     }

//     if (cacheQueue.length === n) cacheQueue.pop();

//     cacheQueue.unshift(data);
//   });

//   return cacheQueue;
// }
// #endregion

// #region - Ch.07 - 06. 장난꾸러기 현수 (정렬)
// function solution(statureList: Array<number>): Array<number> {
//   const answer: Array<number> = [];

//   const sortedStatureList: Array<number> = [...statureList].sort(
//     (a, b) => a - b
//   );

//   sortedStatureList.forEach((data, idx) => {
//     if (data !== statureList[idx]) answer.push(idx + 1);
//   });

//   return answer;
// }
//#endregion

// #region - Ch.07 - 07. 좌표 정렬 (정렬)
// function solution(arr: Array<Array<number>>): Array<Array<number>> {
//   arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
//   return arr;
// }
// #endregion

// #region - Ch.07 - 08. 회의실 배정 (그리디)
// function solution(meetingList: Array<Array<number>>): number {
//   let answer: number = 0;

//   meetingList.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

//   let endTime: number = 0;
//   for (const meeting of meetingList) {
//     if (endTime <= meeting[0]) {
//       answer++;
//       endTime = meeting[1];
//     }
//   }

//   return answer;
// }
// #endregion

// #region - Ch.07 - 09. 결혼식 (그리디)
// function solution(guestList: Array<Array<number>>): number {
//   let answer: number = 0;

//   const timeTable = [];
//   for (const [arrive, departe] of guestList) {
//     timeTable.push([arrive, "a"]);
//     timeTable.push([departe, "d"]);
//   }
//   timeTable.sort(
//     (a, b) => a[0] - b[0] || b[1].charCodeAt() - a[1].charCodeAt()
//   );

//   let cnt = 0;
//   timeTable.forEach(([_, action]) => {
//     if (action === "a") cnt++;
//     else cnt--;

//     answer = Math.max(answer, cnt);
//   });

//   return answer;
// }
// #endregion

// #region - Ch.07 - 10. 이분검색
// function solution(inputNum: number, arr: Array<number>): number {
//   let answer = 0;

//   arr.sort((a, b) => a - b);

//   let lt: number = 0;
//   let rt: number = arr.length - 1;
//   while (lt <= rt) {
//     let mid: number = Math.floor((lt + rt) / 2);

//     if (arr[mid] === inputNum) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > inputNum) rt = mid - 1;
//     else if (arr[mid] < inputNum) lt = mid + 1;
//   }

//   return answer;
// }
// #endregion

// #region - Ch.07 - 11. 뮤직비디오(결정알고리즘)
// function solution(m: number, songList: Array<number>): number {
//   let answer = 0;

//   let lt = Math.max(...songList);
//   let rt = songList.reduce((acc, cur) => acc + cur, 0);

//   while (lt <= rt) {
//     const mid = Math.floor((lt + rt) / 2);

//     let count = 1;
//     let sumPlayTime = 0;
//     for (const song of songList) {
//       const tempPlayTim = sumPlayTime + song;

//       if (mid < tempPlayTim) {
//         count++;
//         sumPlayTime = song;
//       } else sumPlayTime = tempPlayTim;
//     }

//     if (count <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else lt = mid + 1;
//   }

//   return answer;
// }
// #endregion

// #region - Ch.07 - 12. 마구간 정하기(결정알고리즘)
// function solution(m: number, stalls: Array<number>): number {
//   let answer: number = 0;

//   stalls.sort((a, b) => a - b);

//   let lt: number = 1;
//   let rt: number = stalls.at(-1) - stalls.at(0);
//   while (lt <= rt) {
//     const mid: number = Math.floor((lt + rt) / 2);

//     let count: number = 1;
//     let tmp = stalls[0];
//     for (let i = 1; i < stalls.length - 1; i++) {
//       let distance = stalls[i] - tmp;
//       if (mid <= distance) {
//         count++;
//         tmp = stalls[i];
//       }
//     }
//     if (m === count) {
//       answer = mid;
//       lt = mid + 1;
//     } else rt = mid - 1;
//   }

//   return answer;
// }
// #endregion

// #endregion

// #region - Ch.08 - 재귀함수와 완전탐색(DFS:깊이우선탐색)

// #region - Ch.08 - 01. 재귀함수와 스택프레임(중요)
// const solution = (n: number): void => {
//   const DFS = (L: number): void => {
//     if (L === 0) return;
//     else {
//       DFS(L - 1);
//       console.log(L);
//     }
//   };

//   DFS(n);
// };
// #endregion

// #region - Ch.08 - 02. 이진수 출력(재귀)
// const solution = (n: number): string => {
//   let answer: string = "";

//   const DFS = (L: number): void => {
//     if (0 < L) {
//       DFS(Math.floor(L / 2));
//       answer += L % 2;
//     } else return;
//   };
//   DFS(n);

//   return answer;
// };
// #endregion

// #region - Ch.08 - 03. 이진트리순회(DFS: 깊이우선탐색)
// const solution = (n: number): void => {
//   const DFS = (v: number): void => {
//     if (v <= 7) {
//       console.log(v);
//       DFS(v * 2);
//       DFS(v * 2 + 1);
//     } else return;
//   };
//   DFS(n);
// };
// #endregion

// #region - Ch.08 - 04. 부분집합 구하기(이진트리 DFS)
// const solution = (n: number): Array<string> => {
//   const answer: Array<string> = [];
//   const checkList: Array<number> = Array.from({ length: n + 1 }, () => null);
//   const DFS = (v: number): void => {
//     if (v === n + 1) {
//       const temp = checkList.filter((value) => value).join(" ");

//       if (temp) answer.push(temp);
//     } else {
//       checkList[v] = v;
//       DFS(v + 1);
//       checkList[v] = null;
//       DFS(v + 1);
//     }
//   };
//   DFS(1);

//   return answer;
// };
// #endregion

// #region - Ch.08 - 05. 합이 같은 부분집합(이진트리 DFS)
// const solution = (arr: Array<number>): string => {
//   let answer: string = "NO";
//   const goalSum: number = arr.reduce((acc, cur) => acc + cur, 0) / 2;

//   const DFS = (L: number, sum: number): void => {
//     if (answer === "YES") return;

//     if (L === 6) {
//       if (sum === goalSum) answer = "YES";
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   };

//   DFS(0, 0);

//   return answer;
// };
// #endregion

// #region - Ch.08 - 06. 바둑이 승차(이진트리 DFS)
// const solution = (maxWeight: number, dogWeightList: Array<number>): number => {
//   let answer = 0;

//   (function DFS(idx: number, sum: number):void {
//     if (maxWeight < sum) return;

//     if (dogWeightList.length <= idx) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(idx + 1, sum + dogWeightList[idx]);
//       DFS(idx + 1, sum);
//     }
//   })(0, 0);

//   return answer;
// };
// #endregion

// #region - Ch.08 - 07. 최대점수 구하기(이진트리 DFS)
// const solution = (
//   limitTime: number,
//   tableList: Array<Array<number>>
// ): number => {
//   let bestScore = 0;
//   const tableListLength: number = tableList.length;

//   (function DFS(L: number, sumScore: number, time: number): void {
//     if (limitTime < time) return;

//     if (tableListLength <= L) {
//       bestScore = Math.max(bestScore, sumScore);
//     } else {
//       const [point, estimatedTime] = tableList[L];

//       DFS(L + 1, sumScore + point, time + estimatedTime);
//       DFS(L + 1, sumScore, time);
//     }
//   })(0, 0, 0);

//   return bestScore;
// };
// #endregion

// #region - Ch.08 - 08. 중복순열(다중 for문과 재귀의 차이점)
// const solution = (n: number, m: number): number => {
//   let answer: Array<Array<number>> = [];
//   const tmp: Array<number> = [];

//   (function DFS(L: number): void {
//     if (L === m) {
//       console.log(tmp);
//       answer.push(tmp);
//     } else {
//       for (let i = 1; i <= n; i++) {
//         tmp[L] = i;
//         DFS(L + 1);
//       }
//     }
//   })(0);

//   return answer.length;
// };
// #endregion

// #region - Ch.08 - 09. 동전교환(DFS-Cut Edge Tech)
// const solution = (coinLsit: Array<number>, change: number): number => {
//   let answer: number = Number.MAX_SAFE_INTEGER;

//   (function DFS(L: number, sumMoney: number): void {
//     if (change < sumMoney) return;

//     if (change === sumMoney) {
//       answer = Math.min(answer, L);
//     } else {
//       for (const coin of coinLsit) {
//         DFS(L + 1, sumMoney + coin);
//       }
//     }
//   })(0, 0);

//   return answer;
// };
// #endregion

// #region - Ch.08 - 10. 순열 구하기
// const solution = (n: number, arr: Array<number>): number => {
//   let answer: Array<Array<number>> = [];
//   const tmp: Array<number> = Array.from({ length: n }, () => 0);
//   const tmpCheckList: Array<number> = Array.from(
//     { length: arr.length },
//     () => 0
//   );

//   (function DFS(L: number): void {
//     if (n === L) {
//       console.log(tmp);
//       answer.push(tmp);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         if (tmpCheckList[i] === 0) {
//           tmpCheckList[i] = 1;
//           tmp[L] = arr[i];
//           DFS(L + 1);
//           tmpCheckList[i] = 0;
//         }
//       }
//     }
//   })(0);

//   return answer.length;
// };
// console.log(solution(2, [3, 6, 9]));
// #endregion

// #region - Ch.08 - 11. 팩토리얼
// const solution = (n: number): number => {
//   return 1 < n ? n * solution(n - 1) : n;
// };
// console.log(solution(5));
// #endregion

// #region - Ch.08 - 12. 조합수(메모이제이션)
// const solution = (n: number, r: number): number => {
//   const cacheArr: Array<Array<number>> = Array.from({ length: n + 1 }, () =>
//     Array.from({ length: r + 1 }, () => 0)
//   );

//   return (function DFS(tempN: number, tempR: number): number {
//     if (cacheArr[tempN][tempR]) return cacheArr[tempN][tempR];

//     if (tempN === tempR || tempR === 0) return 1;
//     else {
//       const tempValue = DFS(tempN - 1, tempR - 1) + DFS(tempN - 1, tempR);

//       cacheArr[tempN][tempR] = tempValue;
//       return tempValue;
//     }
//   })(n, r);
// };
// #endregion

// #region - Ch.08 - 13. 수열 추측하기(순열, 이항계수 응용)
// const solution = (n: number, m: number): Array<number> => {
//   const answer: Array<number> = [];

//   const cacheArr: Array<number> = Array.from({ length: 11 }, () => 0);

//   const checkArr: Array<number> = Array.from({ length: n + 1 }, () => 0);
//   const tempAnswer: Array<number> = Array.from({ length: n }, () => 0);
//   const combiResult: Array<number> = Array.from({ length: n }, () => 0);

//   function combi(n: number, r: number): number {
//     if (cacheArr[n][r]) return cacheArr[n][r];

//     if (n === r || r === 0) return 1;
//     else return (cacheArr[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
//   }

//   for (let i = 0; i < n; i++) combiResult[i] = combi(n - 1, i);

//   (function DFS(L: number, sum: number) {
//     if (answer.length) return;

//     if (L === n && sum === m) {
//       answer.push(...tempAnswer);
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (checkArr[i] === 0) {
//           checkArr[i] = 1;
//           tempAnswer[L] = i;
//           DFS(L + 1, sum + tempAnswer[L] * combiResult[L]);

//           checkArr[i] = 0;
//         }
//       }
//     }
//   })(0, 0);

//   return answer;
// };
// #endregion

// #region - Ch.08 - 14. 조합 구하기(중요)
// const solution = (n: number, m: number): number => {
//   const answer: Array<Array<number>> = [];
//   const tempArr: Array<number> = Array.from({ length: m }, () => 0);

//   (function DFS(L: number, idx: number) {
//     if (L === m) answer.push([...tempArr]);
//     else {
//       for (let i = idx; i <= n; i++) {
//         tempArr[L] = i;
//         DFS(L + 1, i + 1);
//       }
//     }
//   })(0, 1);

//   return answer.length;
// };
// #endregion

// #region - Ch.08 - 15. 수들의 조합
// const solution = (n: number, arr: Array<number>, m: number): number => {
//   let answer: number = 0;

//   (function DFS(L: number, idx: number, sum: number): void {
//     if (L === n) {
//       if (sum % m) return;

//       answer++;
//     } else {
//       for (let i = idx; i < arr.length; i++) {
//         DFS(L + 1, i + 1, sum + arr[i]);
//       }
//     }
//   })(0, 0, 0);

//   return answer;
// };
// #endregion

// #endregion

// #region - Ch.09 - 그래프와 탐색(DFS, BFS:넓이우선탐색)

// #region - Ch.09 - 01. 그래프와 인접행렬
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.09 - 02. 경로탐색(DFS-인접행렬 : 노드개수가 적을 때)
// const solution = (n: number, multipleArr: Array<Array<number>>) => {
//   let answer: number = 0;
//   const graphArr: Array<Array<number>> = Array.from({ length: n + 1 }, () =>
//     Array(n + 1).fill(0)
//   );
//   const checkArr = Array.from({ length: n + 1 }, () => 0);
//   multipulArr.forEach(([x, y]) => (graphArr[x][y] = 1));

//   (function DFS(v: number): void {
//     if (v === n) answer++;
//     else {
//       for (let i = 2; i <= n; i++) {
//         if (graphArr[v][i] === 1 && checkArr[i] === 0) {
//           checkArr[i] = 1;
//           DFS(i);
//           checkArr[i] = 0;
//         }
//       }
//     }
//   })(1);

//   return answer;
// };
// #endregion

// #region - Ch.09 - 03. 경로탐색(DFS-인접리스트 : 노드개수가 많을 때 적용)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.09 - 04. 미로탐색
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.09 - 05. 이진트리 넓이우선탐색(BFS)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.09 - 06. 송아지 찾기(BFS)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.09 - 07 - 1. 섬나라 아일랜드(DFS)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.09 - 07 - 2. 섬나라 아일랜드(BFS : 넓이우선탐색)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #endregion

// #region - Ch.10 - Dynamic programming(동적계획법 )

// #region - Ch.10 - 01. 계단오르기
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.10 - 02. 돌다리 건너기
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.10 - 03. 최대부분증가수열(LIS)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.10 - 04. 동전교환(냅색 알고리즘)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #region - Ch.10 - 05. 최대점수 구하기(냅색을 이용한 조합)
// const solution = () => {

// }
// console.log(solution())
// #endregion

// #endregion

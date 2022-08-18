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

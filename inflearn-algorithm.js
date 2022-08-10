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

// // #region - Ch.01 - 04. 1부터 N까지 합 출력하기
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
function solution(n, arr) {
  return arr.reduce((acc, cur) => {
    if (cur % 10 === n) acc += 1;

    return acc;
  }, 0);
}
// #endregion

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));

// #region - 최대 공약 수 구하는 공식
// function fnGCD(a, b) {
//   return a % b ? fnGCD(b, a % b) : b;
// }
// #endregion

function solution(numer1, denom1, numer2, denom2) {
  let a = numer1 * denom2 + numer2 * denom1;
  let b = denom1 * denom2;

  let minNum = Math.min(a, b);
  for (let i = 2; i <= minNum; ) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      console.log(a, b);
      // 초기화
      i = 2;
      minNum = Math.min(a, b);
    } else {
      i += 1;
    }
  }
  return [a, b];
}

console.log(solution(4, 4, 4, 4));

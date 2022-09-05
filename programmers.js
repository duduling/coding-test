// #regioin - Level 1

// #regioin - Lv1 - 직사각형 별찍기
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);

//   const starts = "*".repeat(a);
//   for (let i = 0; i < b; i++) console.log(starts);
// });
// #endregion

// #regioin - Lv1 - x만큼 간격이 있는 n개의 숫자
// function solution(x, n) {
//   return Array.from({ length: n }, (_, i) => (i + 1) * x);
// }
// #endregion

// #regioin - Lv1 - 행렬의 덧셈
// function solution(arr1, arr2) {
//   return arr1.map((list, xIdx) =>
//     list.map((value, yIdx) => value + arr2[xIdx][yIdx])
//   );
// }
// #endregion

// #regioin - Lv1 - 핸드폰 번호 가리기
// function solution(phone_number) {
//   return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
// }
// #endregion

// #regioin - Lv1 - 하샤드 수
// function solution(x) {
//   return !(x % `${x}`.split("").reduce((acc, cur) => acc + Number(cur), 0));
// }
// #endregion

// #regioin - Lv1 - 평균 구하기
// function solution(arr) {
//   return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
// }
// #endregion

// #regioin - Lv1 - 콜라츠 추측
// function solution(num, cnt = 0) {
//   if (num === 1) return 500 <= cnt ? -1 : cnt;

//   return solution(num % 2 === 0 ? num / 2 : num * 3 + 1, ++cnt);
// }
// #endregion

// #regioin - Lv1 - 최대공약수와 최소공배수
// function gcd(a, b) {
//   if (b === 0) return a;

//   return gcd(b, a % b);
// }

// function lcm(a, b, gcd) {
//   return (a * b) / gcd;
// }

// function solution(n, m) {
//   const curGcd = gcd(n, m);
//   const curLcm = lcm(n, m, curGcd);

//   return [curGcd, curLcm];
// }

// 유클리드 호제법
// - a,b 를 서로 나눌때, 나누어진다면 b가 최대 공약수 이다. (a > b)
// - 만약 a,b가 나누어지지 않으면 b와 a를 b로 나눈 나머지를 다시 나눈다
// - 서로가 나누어지면 a%b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 a를 b를 나눈 나머지를 다시 나눈다.

// #endregion

// #regioin - Lv1 - 짝수와 홀수
// function solution(num) {
//   return num % 2 ? "Odd" : "Even";
// }
// #endregion

// #regioin - Lv1 - 제일 작은 수 제거하기
// function solution(arr) {
//   if (arr.length <= 1) return [-1];

//   const minNum = Math.min(...arr);
//   return arr.filter((num) => num !== minNum);
// }
// #endregion

// #regioin - Lv1 - 정수 제곱근 판별
// function solution(n) {
//   const tmp = Math.sqrt(n);
//   return Number.isInteger(tmp) ? Math.pow(tmp + 1, 2) : -1;
// }
// #endregion

// #regioin - Lv1 - 정수 내림차순으로 배치하기
// function solution(n) {
//   return Number(
//     `${n}`
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }
// #endregion

// #endregion

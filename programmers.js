// #region - Level 1

// #region - Lv1 - 직사각형 별찍기
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);

//   const starts = "*".repeat(a);
//   for (let i = 0; i < b; i++) console.log(starts);
// });
// #endregion

// #region - Lv1 - x만큼 간격이 있는 n개의 숫자
// function solution(x, n) {
//   return Array.from({ length: n }, (_, i) => (i + 1) * x);
// }
// #endregion

// #region - Lv1 - 행렬의 덧셈
// function solution(arr1, arr2) {
//   return arr1.map((list, xIdx) =>
//     list.map((value, yIdx) => value + arr2[xIdx][yIdx])
//   );
// }
// #endregion

// #region - Lv1 - 핸드폰 번호 가리기
// function solution(phone_number) {
//   return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
// }
// #endregion

// #region - Lv1 - 하샤드 수
// function solution(x) {
//   return !(x % `${x}`.split("").reduce((acc, cur) => acc + Number(cur), 0));
// }
// #endregion

// #region - Lv1 - 평균 구하기
// function solution(arr) {
//   return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
// }
// #endregion

// #region - Lv1 - 콜라츠 추측
// function solution(num, cnt = 0) {
//   if (num === 1) return 500 <= cnt ? -1 : cnt;

//   return solution(num % 2 === 0 ? num / 2 : num * 3 + 1, ++cnt);
// }
// #endregion

// #region - Lv1 - 최대공약수와 최소공배수
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

// #region - Lv1 - 짝수와 홀수
// function solution(num) {
//   return num % 2 ? "Odd" : "Even";
// }
// #endregion

// #region - Lv1 - 제일 작은 수 제거하기
// function solution(arr) {
//   if (arr.length <= 1) return [-1];

//   const minNum = Math.min(...arr);
//   return arr.filter((num) => num !== minNum);
// }
// #endregion

// #region - Lv1 - 정수 제곱근 판별
// function solution(n) {
//   const tmp = Math.sqrt(n);
//   return Number.isInteger(tmp) ? Math.pow(tmp + 1, 2) : -1;
// }
// #endregion

// #region - Lv1 - 정수 내림차순으로 배치하기
// function solution(n) {
//   return Number(
//     `${n}`
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }
// #endregion

// #region - Lv1 - 자연수 뒤집어 배열로 만들기
// function solution(n) {
//   return `${n}`
//     .split("")
//     .reverse()
//     .map((str) => Number(str));
// }
// #endregion

// #region - Lv1 - 자릿수 더하기
// function solution(n) {
//   return `${n}`.split("").reduce((acc, cur) => acc + Number(cur), 0);
// }
// #endregion

// #region - Lv1 - 이상한 문자 만들기
// function solution(s) {
//   return s
//     .toLowerCase()
//     .split(" ")
//     .map((curStr) => {
//       let tmpStr = "";

//       for (let i = 1; i <= curStr.length; i++)
//         tmpStr += i % 2 ? curStr[i - 1].toUpperCase() : curStr[i - 1];

//       return tmpStr;
//     })
//     .join(" ");
// }
// #endregion

// #region - Lv1 - 약수의 합
// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) answer += i;
//   }

//   return answer;
// }
// #endregion

// #region - Lv1 - 시저 암호
// function solution(s, n) {
//   let answer = "";

//   for (const char of s) {
//     if (char === " ") answer += " ";
//     else {
//       const boundary = char < "a" ? 65 : 97;

//       answer += String.fromCharCode(
//         ((char.charCodeAt() - boundary + n) % 26) + boundary
//       );
//     }
//   }
//   return answer;
// }
// #endregion

// #region - Lv1 - 문자열을 정수로 바꾸기
// function solution(s) {
//   return Number(s);
// }
// #endregion

// #region - Lv1 - 수박수박수박수박수박수?
// function solution(n) {
//   return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
// }
// #endregion

// #region - Lv1 - 소수 찾기
// function solution(n) {
//   const answer = new Set();

//   for (let i = 2, num = i * i; num < n; i++, num = i * i) {
//     if (!answer.has(i)) {
//       for (let l = num; l <= n; l += i) {
//         answer.add(l);
//       }
//     }
//   }

//   return n - (answer.size + 1);
// }

// 소인수분해 활용
// #endregion

// #region - Lv1 - 서울에서 김서방 찾기
// function solution(seoul) {
//   return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
// }
// #endregion

// #region - Lv1 - 문자열 다루기 기본
// function solution(s) {
//   return s.length === 4 || s.length === 6 ? !/[a-z]/g.test(s) : false;
// }
// #endregion

// #region - Lv1 - 문자열 내림차순으로 배치하기
// function solution(s) {
//   return s
//     .split("")
//     .sort((a, b) => (a > b ? -1 : 1))
//     .join("");
// }
// #endregion

// #region - Lv1 - 문자열 내 p와 y의 개수
// function solution(s) {
//   const answer = {
//     p: 0,
//     y: 0,
//   };

//   for (const char of s.toLowerCase()) {
//     if (char === "p" || char === "y") answer[char] += 1;
//   }

//   return answer.p === answer.y;
// }
// #endregion

// #region - Lv1 - 문자열 내 마음대로 정렬하기
// function solution(strings, n) {
//   return strings.sort((a, b) =>
//     a[n] === b[n] ? (a > b ? 1 : -1) : a[n] > b[n] ? 1 : -1
//   );
// }

// 신박한 함수 -> localeCompare
// function solution(strings, n) {
//   return strings.sort((a, b) =>
//     a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
//   );
// }
// #endregion

// #region - Lv1 - 두 정수 사이의 합
// function solution(a, b) {
//   return ((a + b) * (Math.abs(b - a) + 1)) / 2;
// }
// #endregion

// #region - Lv1 - 나누어 떨어지는 숫자 배열
// function solution(arr, divisor) {
//   const answer = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);

//   return answer.length ? answer : [-1];
// }
// #endregion

// #region - Lv1 - 상위 n개 레코드
// SELECT NAME from ANIMAL_INS ORDER BY DATETIME ASC LIMIT 1
// #endregion

// #region - Lv1 - [1차] 다트 게임
// function solution(dartResult) {
//   const OPTION_TABLE = {
//     S: 1,
//     D: 2,
//     T: 3,
//     "*": 2,
//     "#": -1,
//     undefined: 1,
//   };

//   const answer = [];

//   //   라운드 분리
//   const dartList = dartResult.match(/[0-9]{1,2}(S|D|T)(\*|#|)/g);

//   //   라운드 정산
//   dartList.forEach((dart, idx) => {
//     const [point, round, option] = dart.match(/[0-9]{1,2}|(S|D|T)|(\*|#)/g);

//     answer[idx] = point ** OPTION_TABLE[round] * OPTION_TABLE[option];

//     if (option === "*" && answer[idx - 1]) answer[idx - 1] *= 2;
//   });

//   // 라운드 합산
//   return answer.reduce((acc, cur) => acc + cur, 0);
// }
// #endregion

// #region - Lv1 - 여러 기준으로 정렬하기
// SELECT ANIMAL_ID, NAME, DATETIME from ANIMAL_INS ORDER BY NAME ASC, DATETIME DESC
// #endregion

// #region - Lv1 - 가운데 글자 가져오기
// function solution(s) {
//   const targerIdx = Math.floor(s.length / 2);

//   return s.length % 2 ? s[targerIdx] : s[targerIdx - 1] + s[targerIdx];
// }
// #endregion

// #region - Lv1 - [1차] 비밀지도
// function solution(n, arr1, arr2) {
//   const answer = [];

//   for (let i = 0; i < n; i++) {
//     answer.push(
//       (arr1[i] | arr2[i])
//         .toString(2)
//         .padStart(n, "0")
//         .replace(/0|1/g, (char) => (char === "1" ? "#" : " "))
//     );
//   }

//   return answer;
// }
// #endregion

// #region - Lv1 - 부족한 금액 계산하기
// function solution(price, money, count) {
//   return Math.max(((price + price * count) * count) / 2 - money, 0);
// }
// #endregion

// #region - Lv1 - 동물의 아이디와 이름
// SELECT ANIMAL_ID, NAME from ANIMAL_INS ORDER BY ANIMAL_ID ASC
// #endregion

// #region - Lv1 - 나머지가 1이 되는 수 찾기
// function solution(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 1) return i;
//   }
// }
// #endregion

// #region - Lv1 - 어린 동물 찾기
// SELECT ANIMAL_ID, NAME from ANIMAL_INS WHERE INTAKE_CONDITION != "Aged" ORDER BY ANIMAL_ID ASC
// #endregion

// #region - Lv1 - 2016년
// function solution(a, b) {
//   const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//   return dayArr[new Date(2016, a, b).getDay()];
// }
// #endregion

// #region - Lv1 - 아픈 동물 찾기
// SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = "Sick"
// #endregion

// #region - Lv1 - 두 개 뽑아서 더하기 (DFS)
// function solution(numbers) {
//   const answer = new Set();

//   (function DFS(L, idx, sum) {
//     if (L === 2) return answer.add(sum);

//     for (let i = idx; i < numbers.length; i++) {
//       DFS(L + 1, i + 1, sum + numbers[i]);
//     }
//   })(0, 0, 0);

//   return [...answer].sort((a, b) => a - b);
// }
// #endregion

// #region - Lv1 - 이름이 있는 동물의 아이디
// SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NOT NULL
// #endregion

// #region - Lv1 - 역순 정렬하기
// SELECT NAME, DATETIME from ANIMAL_INS ORDER BY ANIMAL_ID DESC
// #endregion

// #region - Lv1 - 예산
// function solution(d, budget) {
//   let answer = 0;

//   const sortedD = d.sort((a, b) => a - b);
//   for (let i = 0; i < sortedD.length; i++) {
//     budget -= sortedD[i];
//     if (budget < 0) break;

//     ++answer;
//   }
//   return answer;
// }
// #endregion

// #region - Lv1 - 3진법 뒤집기
// function solution(n) {
//   return n
//     .toString(3)
//     .split("")
//     .reduce((acc, cur, idx) => acc + Number(cur) * 3 ** idx, 0);
// }
// #endregion

// #region - Lv1 - 약수의 개수와 덧셈
// function solution(left, right) {
//   let answer = 0;

//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) answer -= i;
//     else answer += i;
//   }

//   return answer;
// }
// #endregion

// #region - Lv1 - 실패율
// function solution(N, stages) {
//   let accObj = stages.reduce((acc, cur) => {
//     if (cur <= N) acc[cur] = (acc[cur] || 0) + 1;

//     return acc;
//   }, {});

//   let remainPeople = stages.length;
//   for (let i = 1; i <= N; i++) {
//     const tmp = accObj[i] || 0;
//     accObj[i] = tmp / remainPeople;
//     remainPeople -= tmp;
//   }

//   return Object.keys(accObj)
//     .sort((a, b) => accObj[b] - accObj[a])
//     .map((str) => Number(str));
// }
// #endregion

// #region - Lv1 - 이름이 없는 동물의 아이디
// SELECT ANIMAL_ID from ANIMAL_INS WHERE NAME IS NULL

// #endregion

// #region - Lv1 - 최댓값 구하기
// SELECT DATETIME from ANIMAL_INS ORDER BY DATETIME DESC LIMIT 1
// #endregion

// #region - Lv1 - 모든 레코드 조회하기
// SELECT * FROM ANIMAL_INS
// #endregion

// #region - Lv1 - 음양 더하기
// function solution(absolutes, signs) {
//   return absolutes.reduce(
//     (acc, cur, idx) => acc + cur * (signs[idx] ? 1 : -1),
//     0
//   );
// }
// #endregion

// #region - Lv1 - 없는 숫자 더하기
// function solution(numbers) {
//   return (9 * 10) / 2 - numbers.reduce((acc, cur) => acc + cur, 0);
// }
// #endregion

// #region - Lv1 - 내적
// function solution(a, b) {
//   return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
// }
// #endregion

// #region - Lv1 - 같은 숫자는 싫어
// function solution(arr) {
//   const answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
//   }

//   return answer;
// }
// #endregion

// #region - Lv1 - 최소직사각형
// function solution(sizes) {
//   const LongLineList = [];
//   const shortLineList = [];

//   for (let i = 0; i < sizes.length; i++) {
//     const [longLine, shortLine] = sizes[i].sort((a, b) => b - a);
//     LongLineList.push(longLine);
//     shortLineList.push(shortLine);
//   }

//   return Math.max(...LongLineList) * Math.max(...shortLineList);
// }
// #endregion

// #region - Lv1 - K번째수
// function solution(array, commands) {
//   return commands.reduce(
//     (acc, [start, end, target]) => [
//       ...acc,
//       array.slice(start - 1, end).sort((a, b) => a - b)[target - 1],
//     ],
//     []
//   );
// }
// #endregion

// #region - Lv1 - 숫자 문자열과 영단어
// function solution(s) {
//   const NUMBER_TABLE = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   return Number(
//     s.replace(
//       /zero|one|two|three|four|five|six|seven|eight|nine/g,
//       (str) => NUMBER_TABLE[str]
//     )
//   );
// }
// #endregion

// #region - Lv1 - 폰켓몬
// function solution(nums) {
//   return Math.min(new Set(nums).size, Math.floor(nums.length / 2));
// }
// #endregion

// #region - Lv1 - 모의고사
// function solution(answers) {
//   // 각 사람 찍기 패턴
//   const { firstPattern, secondPattern, thirdPattern } = {
//     firstPattern: [1, 2, 3, 4, 5],
//     secondPattern: [2, 1, 2, 3, 2, 4, 2, 5],
//     thirdPattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   };

//   // 종합할 변수 정의
//   const scoreList = Array(3).fill(0);

//   // 각 사람 채점
//   answers.forEach((answer, idx) => {
//     if (answer === firstPattern[idx % firstPattern.length]) scoreList[0] += 1;
//     if (answer === secondPattern[idx % secondPattern.length]) scoreList[1] += 1;
//     if (answer === thirdPattern[idx % thirdPattern.length]) scoreList[2] += 1;
//   });

//   // 1등 점수 구한 뒤 누가 일등인지 판별
//   const topScore = Math.max(...scoreList);
//   return scoreList.reduce((acc, curScore, idx) => {
//     if (curScore === topScore) acc.push(idx + 1);

//     return acc;
//   }, []);
// }
// #endregion

// #region - Lv1 - 소수 만들기
// function solution(nums) {
//   // 소수를 구할 때 해당 수에 루트를 씌운 수까지만 하면 된다.
//   // 소수 구하는 함수
//   const isPrime = (num) => {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }

//     return true;
//   };

//   let answer = 0;

//   (function DFS(L, vertex, sum) {
//     if (L === 3) {
//       if (isPrime(sum)) answer++;
//     } else {
//       for (let i = vertex; i < nums.length; i++) {
//         DFS(L + 1, i + 1, sum + nums[i]);
//       }
//     }
//   })(0, 0, 0);

//   return answer;
// }
// #endregion

// #region - Lv1 - 로또의 최고 순위와 최저 순위
// function solution(lottos, win_nums) {
//   // 등수 관련 정의
//   const RANK_TABLE = [6, 6, 5, 4, 3, 2, 1];

//   // Set으로 변환 -> 체크가 쉬워짐
//   const lottosSet = new Set(win_nums);

//   // 변수 정의
//   let correctCount = 0;
//   let zeroCount = 0;

//   // 한번에 루프 돌면서 0의 개수와 당첨된 번호 체크
//   lottos.forEach((lotto) => {
//     if (lotto === 0) zeroCount++;
//     else if (lottosSet.has(lotto)) correctCount++;
//   });

//   // 등수로 변환 후에 리턴
//   return [RANK_TABLE[correctCount + zeroCount], RANK_TABLE[correctCount]];
// }
// #endregion

// #endregion

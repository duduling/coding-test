function solution(n, t, m, p) {
  let numStr = "";

  let num = 0;
  while (numStr.length < t * m) {
    numStr += num.toString(n);
    num += 1;
  }

  let answer = "";
  for (let i = p - 1; i < t * m; i += m) {
    answer += numStr[i];
  }

  return answer.toUpperCase();
}

console.log(solution(2, 4, 2, 1), "0111");
console.log(solution(16, 16, 2, 1), "02468ACE11111111");
console.log(solution(16, 16, 2, 2), "13579BDF01234567");

function solution(s) {
  let answer = 0;

  for (let i = 1, memoFirstCharCnt = 1; i < s.length; ) {
    const curChar = s[i];
    if (curChar === s[0]) {
      memoFirstCharCnt++;
    } else if (i + 1 === memoFirstCharCnt * 2) {
      answer++;
      s = s.substr(i + 1);
      i = 0;
      memoFirstCharCnt = 1;
    }
    i++;
  }

  return answer + (s.length ? 1 : 0);
}

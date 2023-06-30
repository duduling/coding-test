function solution(n, m, section) {
  let answer = 0;
  let memoPaintLine = -1;

  for (let i = 0; i < section.length; i++) {
    if (memoPaintLine < section[i]) {
      answer++;
      memoPaintLine = section[i] + (m - 1);
    }
  }

  return answer;
}

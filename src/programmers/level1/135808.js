function solution(k, m, score) {
  score.sort((a, b) => a - b);

  let answer = 0;

  const boxCnt = Math.floor(score.length / m);
  for (let i = 0; i < boxCnt; i++) {
    answer += Math.min(...score.splice(-m)) * m;
  }

  return answer;
}

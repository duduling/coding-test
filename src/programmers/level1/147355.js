function solution(t, p) {
  let answer = 0;

  const pLength = p.length;
  const convertNumP = +p;

  for (let i = 0; i < t.length - pLength + 1; i++) {
    let combinationStr = t.slice(i, i + pLength);

    if (+combinationStr <= convertNumP) answer++;
  }

  return answer;
}

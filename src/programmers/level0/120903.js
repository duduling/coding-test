function solution(s1, s2) {
  const s1Set = new Set(s1);

  return s2.reduce((acc, cur) => (acc += s1Set.has(cur) ? 1 : 0), 0);
}

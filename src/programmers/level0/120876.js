function solution(lines) {
  const accLineArr = Array.from({ length: 200 }, () => 0);

  lines.forEach(([a, b]) => {
    while (a < b) {
      accLineArr[a + 100] += 1;
      a += 1;
    }
  });

  return accLineArr.filter((num) => 2 <= num).length;
}

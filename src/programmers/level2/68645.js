function solution(n) {
  const answer = Array.from({ length: n }, (_, idx) =>
    Array.from({ length: idx + 1 })
  );

  let count = 0;
  let x = -1;
  let y = 0;

  while (n > 0) {
    for (let i = 0; i < n; i += 1) {
      x += 1;
      answer[x][y] = ++count;
    }
    for (let i = 0; i < n - 1; i += 1) {
      y += 1;
      answer[x][y] = ++count;
    }
    for (let i = 0; i < n - 2; i += 1) {
      x -= 1;
      y -= 1;
      answer[x][y] = ++count;
    }

    n -= 3;
  }

  return answer.flat();
}

const n = 4;
const result = solution(n);
console.log([1, 2, 9, 3, 10, 8, 4, 5, 6, 7], result);

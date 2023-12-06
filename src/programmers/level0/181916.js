function solution(a, b, c, d) {
  const pointMap = new Map();

  pointMap.set(a, (pointMap.get(a) || 0) + 1);
  pointMap.set(b, (pointMap.get(b) || 0) + 1);
  pointMap.set(c, (pointMap.get(c) || 0) + 1);
  pointMap.set(d, (pointMap.get(d) || 0) + 1);

  switch (pointMap.size) {
    case 1: {
      return 1111 * Math.max(...pointMap.keys());
    }
    case 2: {
      const maxCnt = Math.max(...pointMap.values());
      let a = 0,
        b = 0;
      if (maxCnt === 3) {
        [...pointMap.keys()].forEach((key) => {
          if (pointMap.get(key) === 3) {
            a = key;
          } else {
            b = key;
          }
        });
        return (10 * a + b) ** 2;
      } else {
        [a, b] = [...pointMap.keys()];

        return (a + b) * Math.abs(a - b);
      }
    }
    case 3: {
      let answer = 1;

      [...pointMap.entries()].forEach(([key, value]) => {
        if (value === 1) answer *= key;
      });
      return answer;
    }
    case 4: {
      return Math.min(...pointMap.keys());
    }

    default:
      break;
  }
}

console.log(solution(2, 2, 2, 2), 2222);
console.log(solution(4, 1, 4, 4), 1681);
console.log(solution(6, 3, 3, 6), 27);
console.log(solution(2, 5, 2, 6), 30);
console.log(solution(6, 4, 2, 5), 2);
console.log(solution(1, 1, 5, 5), 24);

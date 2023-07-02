const memoMap = new Map();

const getDivisorCount = (n) => {
  if (typeof n !== "number") return 0;

  const divisorSet = new Set();
  const sqrtN = Math.ceil(Math.sqrt(n));

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      const remainNum = n / i;

      if (memoMap.has(remainNum)) {
        const divisorCnt = divisorSet.size + memoMap.get(remainNum);
        memoMap.set(n, divisorCnt);
        return divisorCnt;
      }

      divisorSet.add(remainNum);
      divisorSet.add(i);
    }
  }
  return divisorSet.size;
};

function solution(number, limit, power) {
  const answer = [];

  for (let i = 1; i <= number; i += 1) {
    answer.push(getDivisorCount(i));
  }

  return answer.reduce((acc, cur) => acc + (limit < cur ? power : cur), 0);
}

console.log(solution(5, 3, 2, 10));
console.log(solution(10, 3, 2, 21));

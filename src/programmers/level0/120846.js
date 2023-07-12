function solution(n) {
  let primeCount = 0;

  for (let num = 4; num <= n; num++) {
    if (!isPrime(num)) {
      primeCount++;
    }
  }

  return primeCount;
}

function isPrime(num) {
  if (num <= 2) return true;
  if (num % 2 === 0) return false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

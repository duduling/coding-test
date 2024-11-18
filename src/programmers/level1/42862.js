function solution(n, lost, reserve) {
  let answer = new Array(n + 1).fill(1);

  answer[0] = 0;

  lost.forEach((lostStudent) => {
    answer[lostStudent] -= 1;
  });

  reserve.forEach((reserveStudent) => {
    answer[reserveStudent] += 1;
  });

  for (let i = 1; i <= n; i += 1) {
    if (answer[i] === 0) {
      if (answer[i - 1] === 2) {
        answer[i - 1] -= 1;
        answer[i] += 1;
      } else if (answer[i + 1] === 2) {
        answer[i + 1] -= 1;
        answer[i] += 1;
      }
    }
  }

  return answer.filter((hasStudent) => hasStudent).length;
}

console.log(solution(5, [2, 4], [1, 3, 5], 5));
console.log(solution(5, [2, 4], [3], 4));
console.log(solution(3, [3], [1], 2));

let playerCtn = 0;
const nextPlayer = (player) => (player + 2) % playerCtn;

function solution(numbers, k) {
  playerCtn = numbers.length;
  let answer = 0;

  for (let i = 1; i < k; i += 1) {
    answer = nextPlayer(answer);
  }

  return numbers[answer];
}

console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2

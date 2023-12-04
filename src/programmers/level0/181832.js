function solution(n) {
  const WAYS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const answer = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  const maxNum = n ** 2;

  let inputNum = 1;
  let directionIdx = 0;
  let x = 0;
  let y = 0;

  while (inputNum <= maxNum) {
    answer[y][x] = inputNum;
    inputNum += 1;

    for (let i = 0; i < 4; i += 1) {
      const tmpDirectionIdx = (directionIdx + i) % 4;
      const [moveY, moveX] = WAYS[tmpDirectionIdx];
      const tmpY = y + moveY;
      const tmpX = x + moveX;

      if (answer?.[tmpY]?.[tmpX] === 0) {
        directionIdx = tmpDirectionIdx;
        y = tmpY;
        x = tmpX;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(4));

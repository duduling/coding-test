// For Test with Example
export const input = `9`.trim().split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n");

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const limitTime = +input[0];
  const direction = [
    [0, 1], // 위
    [1, 0], // 오른쪽
    [0, -1], // 아래
    [-1, 0], // 왼쪽
  ];

  // Logic

  let x = 0;
  let y = 0;
  let step = 1;
  let takeTime = 0;
  let directionIdx = 0;

  while (takeTime < limitTime) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < step; j++) {
        if (takeTime === limitTime) break;

        x += direction[directionIdx][0];
        y += direction[directionIdx][1];
        takeTime++;
      }
      directionIdx = (directionIdx + 1) % 4;
    }
    step += 1;
  }

  return `${x} ${y}`;
};

console.log(solution(input));

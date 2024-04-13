// For Test with Example
export const input = `3 3
111
111
111
000
000
000`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Logic
  const [N, M] = input[0].split(" ").map(Number);
  const A = input.slice(1, N + 1).map((row) => row.split("").map(Number));
  const B = input.slice(N + 1).map((row) => row.split("").map(Number));

  let flipCnt = 0;

  // 특정 좌표부터 3x3 뒤집기
  const flipFunc = (y: number, x: number) => {
    for (let i = y; i < y + 3; i += 1) {
      for (let j = x; j < x + 3; j += 1) {
        A[i][j] = 1 - A[i][j];
      }
    }
    // 함수 사용할 때마다 누적
    flipCnt += 1;
  };

  // 순환하면서 다른 값 찾을 때마다 flipFunc 실행
  for (let i = 0; i < N - 2; i += 1) {
    for (let j = 0; j < M - 2; j += 1) {
      if (A[i][j] !== B[i][j]) flipFunc(i, j);
    }
  }

  // 전체 순환하면서 비교하기
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (A[i][j] !== B[i][j]) return -1;
    }
  }
  return flipCnt;
};

console.log(solution(input));

// For Test with Example
export const input = `3 3 2
0 0 1
0 -1 0
1 0 0
0 1 0
-1 0 0 
0 0 0`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [M, N, H]: number[] = input.shift().split(" ").map(Number);
  const DIRECTION_Z = [0, 0, 0, 0, -1, 1];
  const DIRECTION_Y = [0, 0, -1, 1, 0, 0];
  const DIRECTION_X = [-1, 1, 0, 0, 0, 0];

  const queue = [];
  const boxes = Array.from(Array(H), () =>
    Array.from(Array(N), () => Array.from(Array(M).fill(0)))
  );

  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      boxes[z][y] = input[z * N + y].split(" ").map(Number);
    }
  }

  let unripeTomato = 0;
  for (let z = 0; z < H; z++) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (boxes[z][y][x] == 0) unripeTomato++;

        if (boxes[z][y][x] == 1) queue.push([z, y, x, 0]);
      }
    }
  }

  let queuePointer = 0;
  let answer = 0;
  while (queue.length > queuePointer) {
    const [z, y, x, days]: number[] = queue[queuePointer++];

    for (let i = 0; i < 6; i++) {
      const moveZ: number = z + DIRECTION_Z[i];
      const moveY: number = y + DIRECTION_X[i];
      const moveX: number = x + DIRECTION_Y[i];

      if (
        0 <= moveZ &&
        moveZ < H &&
        0 <= moveY &&
        moveY < N &&
        0 <= moveX &&
        moveX < M &&
        !boxes[moveZ][moveY][moveX]
      ) {
        boxes[moveZ][moveY][moveX] = 1;
        queue.push([moveZ, moveY, moveX, days + 1]);
        unripeTomato -= 1;
      }
    }
    answer = days;
  }

  return unripeTomato ? -1 : answer;
};
console.log(solution(input));

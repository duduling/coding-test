// For Test with Example
// export const input = `4 6
// 110110
// 110110
// 111111
// 111101`
//   .trim()
//   .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
// const waysList: number[][] = [
//   [0, 1],
//   [-1, 0],
//   [0, -1],
//   [1, 0],
// ];
// const solution = (input: string[]) => {
//   // Initial Setting
//   const [H, W] = input.shift().split(' ').map(Number);

//   // Logic
//   const loadMap: number[][] = input.map((row) => row.split('').map(Number));
//   const queue: number[][] = [[0, 0, 1]];
//   loadMap[0][0] = 0;

//   while (queue.length > 0) {
//     const [y, x, distance] = queue.shift();

//     if (y === H - 1 && x === W - 1) return distance;

//     waysList.forEach(([moveY, moveX]) => {
//       moveY += y;
//       moveX += x;

//       if (loadMap?.[moveY]?.[moveX] === 1) {
//         loadMap[moveY][moveX] = 0;
//         queue.push([moveY, moveX, distance + 1]);
//       }
//     });
//   }
// };
// console.log(solution(input));

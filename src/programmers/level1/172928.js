const WAYS = {
  E: [0, 1],
  W: [0, -1],
  S: [1, 0],
  N: [-1, 0],
};

function solution(park, routes) {
  let position = [];

  for (let curY = 0; curY < routes.length; curY += 1) {
    const curX = park[curY].indexOf("S");

    if (-1 < curX) {
      position = [curY, curX];
    }
  }

  for (let l = 0; l < routes.length; l += 1) {
    const [direction, distance] = routes[l].split(" ");
    const [x, y] = WAYS[direction];

    let okay = true;
    for (let k = 1; k <= +distance; k += 1) {
      const [nextX, nextY] = [position[0] + x * k, position[1] + y * k];

      console.log("🚀 ~ file: 172928.js:34 ~ solution ~ position:", [
        nextX,
        nextY,
        park[nextY][nextX],
      ]);
      if (park[nextY][nextX] !== "O") {
        okay = false;
        break;
      }
    }
    if (okay) {
      position = [position[0] + x * distance, position[1] + y * distance];
    }
  }

  return position;
}

// console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"], [2, 1]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"], [0, 1]));
// console.log(
//   solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"], [0, 0])
// );

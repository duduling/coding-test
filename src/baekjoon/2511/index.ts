// For Test with Example
export const input = `4 5 6 7 8
5 4 7 6 9`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [pointListA, pointListB] = input.map((str) =>
    str.split(" ").map(Number)
  );

  // Logic
  let totalPointA = 0;
  let totalPointB = 0;
  let winner = "D";

  for (let i = 0; i < pointListA.length; i++) {
    const pointA = pointListA[i];
    const pointB = pointListB[i];

    if (pointA === pointB) {
      totalPointA += 1;
      totalPointB += 1;
    } else if (pointB < pointA) {
      winner = "A";
      totalPointA += 3;
    } else if (pointA < pointB) {
      winner = "B";
      totalPointB += 3;
    }
  }

  if (totalPointB < totalPointA) {
    winner = "A";
  } else if (totalPointA < totalPointB) {
    winner = "B";
  }

  return `${totalPointA} ${totalPointB}\n${winner}`;
};
console.log(solution(input));

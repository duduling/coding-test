// For Test with Example
const input = `5
1 250 10 15 20
2 10.7 3.5 4.7 5.5
3 523.7 15.3 20.7 33.3
4 1000 30 30 50
5 500 15 15 25`
  .trim()
  .split("\n"); // [' ' | '\n']

// For Submit
// const input = `${require('fs').readFileSync('/dev/stdin')}`.trim().split('\n'); // ' ' | '\n']

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N: number = +input.shift();
  return input
    .map((round) => {
      const [idx, totalDistance, aTrainSpeed, bTrainSpeed, flySpeedD] = round
        .split(" ")
        .map(Number);

      return `${idx} ${(
        (totalDistance / (aTrainSpeed + bTrainSpeed)) *
        flySpeedD
      ).toFixed(2)}`;
    })
    .join("\n");

  // Logic
};

console.log(solution(input));

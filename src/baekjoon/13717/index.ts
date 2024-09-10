// For Test with Example
export const input = `4
Caterpie
12 33
Weedle
12 42
Pidgey
12 47
Rattata
25 71`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();

  // Logic
  let evolutionCnt: number = 0;
  let lotPocketmonName: string = "";
  let lotPocketmonCnt: number = 0;

  for (let i = 0; i < N; i += 1) {
    let curEvolutionCnt: number = 0;
    let [needCandy, totalCandy]: number[] = input[i * 2 + 1]
      .split(" ")
      .map(Number);

    while (needCandy <= totalCandy) {
      totalCandy -= needCandy;
      totalCandy += 2;
      curEvolutionCnt += 1;
    }

    if (lotPocketmonCnt < curEvolutionCnt) {
      lotPocketmonCnt = curEvolutionCnt;
      lotPocketmonName = input[i * 2];
    }

    evolutionCnt += curEvolutionCnt;
  }

  return `${evolutionCnt}\n${lotPocketmonName}`;
};
console.log(solution(input));

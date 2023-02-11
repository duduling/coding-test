// For Test with Example
export const input = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = input.shift().split(" ").map(Number);

  // Logic
  const questionList: string[] = input.splice(-m);
  const objPocketmon: { [key: string]: number } = input.reduce(
    (acc, cur, idx) => Object.assign(acc, { [cur]: idx + 1 }),
    {}
  );

  for (let i = 0; i < m; i += 1) {
    if (Number.isNaN(+questionList[i])) {
      console.log(objPocketmon[questionList[i]]);
    } else {
      console.log(input[+questionList[i] - 1]);
    }
  }
};
solution(input);

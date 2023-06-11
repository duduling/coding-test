// For Test with Example
export const input = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  let index: number = 1;
  const answer: string[] = [];
  for (let i = 0; i < n; i += 1) {
    const m: number = +input[index];

    const memoOBj: {
      [key: string]: string[];
    } = {};

    for (let j = 0; j < m; j += 1) {
      const [item, type] = input[index + j].split(" ");

      if (!memoOBj[type]) {
        memoOBj[type] = [];
      }

      memoOBj[type]?.push(item);
    }

    index += m;

    console.log("🚀 ~ file: index.ts:38 ~ solution ~ memoOBj:", memoOBj);

    console.log(
      Object.values(memoOBj).reduce(
        (acc: number, cur: string[]) => acc + cur.length,
        0
      )
    );
  }
};
console.log(solution(input));

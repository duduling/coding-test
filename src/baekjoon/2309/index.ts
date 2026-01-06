// For Test with Example
export const input = `20
7
23
19
10
15
25
8
13`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const dwarfList = input.map(Number).sort((a, b) => a - b);

  // Logic
  const totalHeight = dwarfList.reduce((acc, cur) => acc + cur, 0);
  const extraHeight = totalHeight - 100;

  for (let i = 0; i < dwarfList.length; i += 1) {
    for (let k = i + 1; k < dwarfList.length; k += 1) {
      if (dwarfList[i] + dwarfList[k] === extraHeight) {
        return dwarfList.filter((_, idx) => idx !== i && idx !== k).join('\n');
      }
    }
  }
};

console.log(solution(input));

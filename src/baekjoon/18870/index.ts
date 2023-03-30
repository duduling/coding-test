// For Test with Example
export const input = `5
2 4 -10 4 -9`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];
  const numList: string[] = input[1].split(" ");

  const sortedList: number[] = numList
    .map(Number)
    .sort((a: number, b: number) => a - b);

  // Logic
  const numMap: Map<number, number> = new Map();

  sortedList.forEach((num, idx) => {
    numMap.set(num, idx);
  });

  let answer: string = "";
  numList.forEach((num) => {
    answer += `${numMap.get(+num)} `;
  });

  return answer;
};
console.log(solution(input));

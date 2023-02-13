// For Test with Example
export const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = input.shift().split(" ").map(Number);

  // Logic
  const noListenMap: Set<string> = new Set();
  const noSeeMap: Set<string> = new Set();

  for (let i = 0; i < n + m; i += 1) {
    if (i < n) {
      noListenMap.add(input[i]);
    } else {
      noSeeMap.add(input[i]);
    }
  }

  const answer: string[] = [];
  noSeeMap.forEach((mItem: string) => {
    if (noListenMap.has(mItem)) answer.push(mItem);
  });

  answer.sort((a: string, b: string) => a.localeCompare(b));

  console.log(`${answer.length}\n${answer.join("\n")}`);
};
solution(input);

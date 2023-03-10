// For Test with Example
export const input = `7
6
1 2
2 3
1 5
5 2
5 6
4 7
`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input.shift();
  const m: number = +input.shift();

  // Logic
  const answer: boolean[] = new Array(n + 1).fill(false);
  const virusLinkList: number[][] = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i += 1) {
    const [a, b]: number[] = input[i].split(" ").map(Number);
    virusLinkList[a].push(b);
    virusLinkList[b].push(a);
  }

  const queue: number[][] = [virusLinkList[1]];

  while (queue.length) {
    const curList: number[] = queue.shift();

    for (let j = 0; j < curList.length; j += 1) {
      const curNetwork: number = curList[j];

      if (!answer[curNetwork]) {
        queue.push(virusLinkList[curNetwork]);
        answer[curNetwork] = true;
      }
    }
  }

  return answer.filter((val) => val).length - 1;
};
console.log(solution(input));

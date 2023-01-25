// For Test with Example
export const input = `7 3`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [n, m]: number[] = [+input[0], +input[1]];
  const queue: number[] = Array.from(
    { length: n },
    (_, idx: number) => idx + 1
  );

  // Logic
  const answer: number[] = [];

  let cnt: number = 0;
  while (queue.length) {
    cnt++;

    const curNum: number = queue.shift();
    if (cnt !== m) {
      queue.push(curNum);
    } else {
      cnt = 0;
      answer.push(curNum);
    }
  }
  console.log(`<${answer.join(", ")}>`);
};
solution(input);

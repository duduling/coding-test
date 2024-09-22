// For Test with Example
export const input = `4
aaa bbb ccc ddd
bbb ddd
aaa ddd
aaa
aaa bbb`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = input.shift();

  // Logic
  const nameObj: {
    [key: string]: number;
  } = input[0].split(" ").reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: 0,
    };
  }, {});

  for (let i = 1; i < input.length; i += 1) {
    input[i].split(" ").forEach((name) => {
      nameObj[name] += 1;
    });
  }

  return Object.keys(nameObj)
    .sort((a, b) => nameObj[b] - nameObj[a])
    .map((name) => `${name} ${nameObj[name]}`)
    .join("\n");
};
console.log(solution(input));

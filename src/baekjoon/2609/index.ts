// For Test with Example
export const input = `24 18`.trim().split(" "); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // " " | "\n"]

// My Code
const getGCD = (a: number, b: number): number => {
  const remainNum: number = a % b;

  return remainNum === 0 ? b : getGCD(b, remainNum);
};
const solution = (input: string[]) => {
  // Initial Setting
  const [a, b] = input
    .map((val: string) => +val)
    .sort((a: number, b: number) => b - a);

  // Logic
  const gcd: number = getGCD(a, b);
  const lcm: number = (a * b) / gcd;

  console.log(gcd);
  console.log(lcm);
};
solution(input);

// For Test with Example
export const input = `100000
0`
  .trim()
  .split('\n'); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const numberList = input.map(Number).slice(0, -1);

  // Logic
  const checkPrime = (num: number): boolean => {
    const sqrtNum = Math.sqrt(num);

    for (let i = 2; i <= sqrtNum; i += 1) {
      if (num % i === 0) return false;
    }

    return true;
  };

  return numberList
    .map((num) => {
      for (let j = 3; j < num; j += 2) {
        const [a, b] = [j, num - j];

        if (checkPrime(a) && checkPrime(b)) {
          return `${num} = ${a} + ${b}`;
        }
      }
      return "Goldbach's conjecture is wrong.";
    })
    .join('\n');
};

console.log(solution(input));

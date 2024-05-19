// For Test with Example
export const input = `6
10 20 10 30 20 50`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const N = +input.shift();
  const numberList: number[] = input[0].split(" ").map(Number);

  // Logic
  const memoCntList: number[] = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numberList[j] < numberList[i]) {
        memoCntList[i] = Math.max(memoCntList[i], memoCntList[j] + 1);
      }
    }
  }

  // 모든 위치를 확인한 후, memoCntList 배열에서 가장 큰 값을 찾아 반환
  return Math.max(...memoCntList);
};
console.log(solution(input));

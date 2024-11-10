// For Test with Example
export const input = `5 24
4 2
2 0
8 1
6 3
12 5`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input.shift()!.split(" ").map(Number);
  const students = input.map((line) => {
    const [P, B] = line.split(" ").map(Number);
    return { P, B };
  });

  let maxStudents = 0;

  // 할인 받을 학생을 한 명씩 선택해보며 완전탐색
  for (let i = 0; i < N; i++) {
    const costs = students.map((student, idx) => ({
      // 할인 받는 학생은 선물 가격 절반
      cost:
        idx === i
          ? Math.floor(student.P / 2) + student.B
          : student.P + student.B,
      idx,
    }));

    // 비용이 적은 순서대로 정렬
    costs.sort((a, b) => a.cost - b.cost);

    // 예산 내에서 최대한 많은 학생 선택
    let currentBudget = 0;
    let count = 0;

    for (const { cost } of costs) {
      if (currentBudget + cost <= M) {
        currentBudget += cost;
        count++;
      } else {
        break;
      }
    }

    maxStudents = Math.max(maxStudents, count);
  }

  return maxStudents;
};
console.log(solution(input));

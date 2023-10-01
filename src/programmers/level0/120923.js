const solution = (num, total) => {
  const centerNum = Math.floor(total / num);
  const intervalNum = (num - 1) / 2;

  const answer = [];
  for (
    let i = centerNum - Math.floor(intervalNum);
    i <= centerNum + Math.ceil(intervalNum);
    i += 1
  ) {
    answer.push(i);
  }

  return answer;
};

console.log(solution(3, 12, [3, 4, 5]));
console.log(solution(5, 15, [1, 2, 3, 4, 5]));
console.log(solution(4, 14, [2, 3, 4, 5]));
console.log(solution(5, 5, [-1, 0, 1, 2, 3]));

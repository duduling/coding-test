const solution = (n) => {
  const answer = [];

  const hanoi = (cnt, from, to, via) => {
    if (cnt === 1) {
      answer.push([from, to]);
      return;
    }

    hanoi(cnt - 1, from, via, to);
    answer.push([from, to]);
    hanoi(cnt - 1, via, to, from);
  };

  hanoi(n, 1, 3, 2);

  return answer;
};

console.log(
  solution(2, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);

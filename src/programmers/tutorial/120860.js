function solution(dots) {
  const width =
    Math.max(...dots.map(([y]) => y)) - Math.min(...dots.map(([y]) => y));
  const height =
    Math.max(...dots.map(([_, x]) => x)) - Math.min(...dots.map(([_, x]) => x));

  return width * height;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);

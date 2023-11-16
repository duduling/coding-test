function solution([a, b, c, d]) {
  var answer = 0;

  const calculator = (a, b, c, d) => {
    const inclinationA = Math.abs(a[0] - b[0]) / Math.abs(a[1] - b[1]);
    const inclinationB = Math.abs(c[0] - d[0]) / Math.abs(c[1] - d[1]);

    if (inclinationA === inclinationB) {
      answer = 1;
    }
  };

  calculator(a, b, c, d);
  calculator(a, c, b, d);
  calculator(a, d, b, c);

  return answer;
}

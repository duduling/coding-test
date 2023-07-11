function solution(ingredient) {
  let answer = 0;

  const stack = [];
  for (let i = 0; i < ingredient.length; i += 1) {
    stack.push(ingredient[i]);

    const stackLength = stack.length;
    if (
      stack[stackLength - 4] === 1 &&
      stack[stackLength - 3] === 2 &&
      stack[stackLength - 2] === 3 &&
      stack[stackLength - 1] === 1
    ) {
      stack.splice(-4);
      answer += 1;
    }
  }

  return answer;
}

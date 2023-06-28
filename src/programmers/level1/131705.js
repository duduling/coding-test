function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length - 2; i += 1) {
    const firstNum = number[i];

    for (let l = i + 1; l < number.length - 1; l += 1) {
      const secondNum = firstNum + number[l];

      for (let k = l + 1; k < number.length; k += 1) {
        const thirdNum = secondNum + number[k];

        if (thirdNum === 0) answer++;
      }
    }
  }

  return answer;
}

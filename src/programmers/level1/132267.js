function solution(bundleCoke, returnCoke, remainCoke) {
  let answer = 0;
  let profitCoke = 0;

  while (bundleCoke <= remainCoke) {
    profitCoke = Math.floor(remainCoke / bundleCoke) * returnCoke;
    remainCoke = profitCoke + (remainCoke % bundleCoke);
    answer += profitCoke;
  }

  return answer;
}

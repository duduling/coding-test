function solution(X, Y) {
  const xMemoMap = X.split("").reduce((acc, cur) => {
    acc.set(cur, (acc.get(cur) || 0) + 1);
    return acc;
  }, new Map());

  const commonNumList = Y.split("").filter((val) => {
    if (0 < xMemoMap.get(val)) {
      xMemoMap.set(val, xMemoMap.get(val) - 1);
      return true;
    }
    return false;
  });

  if (0 < commonNumList.length) {
    const answer = commonNumList.sort((a, b) => b - a).join("");

    return answer[0] === "0" ? "0" : answer;
  }

  return "-1";
}

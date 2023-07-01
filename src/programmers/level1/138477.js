function solution(k, score) {
  let topRankList = [];

  return score.reduce((acc, cur) => {
    topRankList.push(cur);
    topRankList = topRankList.sort((a, b) => a - b).slice(-k);

    acc.push(topRankList[0]);
    return acc;
  }, []);
}

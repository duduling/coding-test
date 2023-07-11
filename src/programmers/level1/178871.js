function solution(players, callings) {
  const rankMap = new Map();

  players.forEach((player, idx) => {
    rankMap.set(idx, player);
    rankMap.set(player, idx);
  });

  callings.forEach((calling) => {
    const curRank = rankMap.get(calling);
    const curName = rankMap.get(curRank);
    const prevRank = curRank - 1;
    const prevName = rankMap.get(prevRank);

    rankMap.set(curRank, prevName);
    rankMap.set(prevName, curRank);

    rankMap.set(prevRank, curName);
    rankMap.set(curName, prevRank);
  });

  return [...rankMap.values()].filter((val) => typeof val === "string");
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"],
    ["mumu", "kai", "mine", "soe", "poe"]
  )
);

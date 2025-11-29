function solution(participant, completion) {
  const completionObj = completion.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  return participant.find((player) => {
    if (completionObj[player] > 0) {
      completionObj[player] -= 1;
      return false;
    }
    return true;
  });
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'], 'leo');
solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola'],
  'vinko'
);
solution(
  ['mislav', 'stanko', 'mislav', 'ana'],
  ['stanko', 'ana', 'mislav'],
  'mislav'
);

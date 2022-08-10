// #region - [1차] 다트 게임 (Level 1)
function solution(dartResult) {
  const OPTION_TABLE = {
    S: 1,
    D: 2,
    T: 3,
    "*": 2,
    "#": -1,
    undefined: 1,
  };

  const roundList = dartResult.match(/(\d{1,})(S|D|T)(\*|#)?/g);

  return roundList
    .reduce((acc, cur, idx) => {
      const [_, point, bonus, option] = cur.match(/(\d{1,})(S|D|T)(\*|#)?/);

      if (option === "*" && 0 < idx) {
        acc[idx - 1].option *= 2;
      }

      acc.push({
        score: Number(point) ** OPTION_TABLE[bonus],
        option: OPTION_TABLE[option],
      });

      return acc;
    }, [])
    .reduce((acc, { score, option }) => acc + score * option, 0);
}
// #endregion

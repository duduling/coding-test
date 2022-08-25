// #region - [1차] 다트 게임 (Level 1)
// function solution(dartResult) {
//   const OPTION_TABLE = {
//     S: 1,
//     D: 2,
//     T: 3,
//     "*": 2,
//     "#": -1,
//     undefined: 1,
//   };

//   const roundList = dartResult.match(/(\d{1,})(S|D|T)(\*|#)?/g);

//   return roundList
//     .reduce((acc, cur, idx) => {
//       const [_, point, bonus, option] = cur.match(/(\d{1,})(S|D|T)(\*|#)?/);

//       if (option === "*" && 0 < idx) {
//         acc[idx - 1].option *= 2;
//       }

//       acc.push({
//         score: Number(point) ** OPTION_TABLE[bonus],
//         option: OPTION_TABLE[option],
//       });

//       return acc;
//     }, [])
//     .reduce((acc, { score, option }) => acc + score * option, 0);
// }
// #endregion

// #region - 조이스틱
// function solution(name) {
//   const nameLength = name.length;
//   let answer = 0;

//   let index = 0;
//   let move = nameLength - 1;
//   for (let i = 0; i < nameLength; i++) {
//     answer += Math.min(
//       name.charCodeAt(i) - "A".charCodeAt(0),
//       26 + "A".charCodeAt(0) - name.charCodeAt(i)
//     );

//     // 다음 글자부터 연속되는 A의 숫자 확인
//     index = i + 1;
//     while (index < nameLength && name[index] === "A") index++;

//     // 현재 움직인 숫자와 앞으로
//     move = Math.min(
//       move,
//       // 지금까지 온 거리에서 다시 뒤로 돌아가서 해당 글자까지 가는 것이 나은지
//       i * 2 + nameLength - index,
//       // 아니면 처음부터 뒤로 갔다가 정방향으로 진행 하는 것이 나았는지 비교
//       (nameLength - index) * 2 + i
//     );
//   }

//   return answer + move;
// }
// #endregion

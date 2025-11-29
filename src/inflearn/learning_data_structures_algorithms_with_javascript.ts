// #region - 06. 택배 박스 정리 시스템 (스택)
// function solution(boxes: number[]) {
//   return boxes.reduce((acc, cur) => {
//     if (acc[acc.length - 1] !== cur) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []);
// }
// console.log(solution([2, 2, 5, 5, 5, 1, 1]));
// console.log(solution([7, 7, 8, 8, 0, 0, 0]));
// #endregion

// #region - 07. 성문 열고 닫기 (스택)
// function solution(gate: string) {
//   const stack = [];

//   for (const curGate of gate) {
//     if (curGate === '<') {
//       stack.push(curGate);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }
//       stack.pop();
//     }
//   }

//   return stack.length === 0;
// }
// console.log(solution('<<>>'));
// console.log(solution('<<>>'));
// console.log(solution('>><<'));
// console.log(solution('<<<>'));
// #endregion

// #region - 08. 알파벳 폭발 (스택)
// function solution(s: string): string {
//   const stack = [];

//   for (const curChar of s) {
//     const top = stack[stack.length - 1];

//     if (top && Math.abs(curChar.charCodeAt(0) - top.charCodeAt(0)) === 32) {
//       stack.pop();
//     } else {
//       stack.push(curChar);
//     }
//   }

//   return stack.join('');
// }

// console.log(solution('infFflearn'));
// console.log(solution('aAbBcC'));
// console.log(solution('xYyX'));
// console.log(solution('a'));
// console.log(solution('Code'));
// #endregion

// #region - 명령어 수행하기(큐)
// function solution(commands: string[]) {
//   const queue: number[] = [];
//   const answer: (number | string)[] = [];

//   for (let i = 0; i < commands.length; i++) {
//     const [action, value] = commands[i].split(' ');

//     switch (action) {
//       case 'ENQUEUE':
//         queue.push(+value);
//         break;

//       case 'DEQUEUE':
//         answer.push(queue.shift() ?? 'EMPTY');

//         break;

//       default:
//         break;
//     }
//   }

//   return answer;
// }
// console.log(
//   solution(['ENQUEUE 3', 'ENQUEUE 5', 'DEQUEUE', 'DEQUEUE', 'DEQUEUE'])
// );
// #endregion

// #region - 두 줄 대기열에서 짝수 번호 뽑기(큐)
function solution(queue1: number[], queue2: number[], k: number) {
  const integrateQueue = queue1.concat(queue2);

  const answer: number[] = [];

  while (integrateQueue.length > 0 && answer.length < k) {
    const curNum = integrateQueue.shift();

    if (curNum % 2 === 0) {
      answer.push(curNum);
    } else {
      integrateQueue.push(curNum);
    }
  }

  return answer;
}
console.log(solution([1, 3, 4], [6, 5, 8], 3));
// #endregion

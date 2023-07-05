function solution(keymap, targets) {
  const shortcutMap = new Map();

  keymap.forEach((keyStr) => {
    for (let i = 0; i < keyStr.length; i += 1) {
      const char = keyStr[i];

      shortcutMap.set(
        char,
        Math.min(i + 1, shortcutMap.get(char) || Number.MAX_SAFE_INTEGER)
      );
    }
  });

  const answer = [];

  targets.forEach((targetStr) => {
    let pressCnt = 0;

    for (let l = 0; l < targetStr.length; l += 1) {
      if (shortcutMap.has(targetStr[l])) {
        pressCnt += shortcutMap.get(targetStr[l]);
      } else {
        pressCnt = -1;
        break;
      }
    }
    answer.push(pressCnt);
  });

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"], [9, 4]));
console.log(solution(["AA"], ["B"], [-1]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"], [4, 6]));

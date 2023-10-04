const WORD_LIST = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let answer = babbling.join("-");

  WORD_LIST.forEach((word) => {
    answer = answer.replaceAll(word, " ");
  });

  return answer.split("-").filter((word) => !word.trim()).length;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));

const POSSIBLE_BABBLING_LIST = ["aya", "ye", "woo", "ma"];

const matchBabbling = (word) => {
  for (let i = 0; i < POSSIBLE_BABBLING_LIST.length; i += 1) {
    const doubleBabbling = POSSIBLE_BABBLING_LIST[i].repeat(2);

    if (-1 < word.indexOf(doubleBabbling)) return false;
    word = word.replaceAll(POSSIBLE_BABBLING_LIST[i], " ");
  }
  return !word.trim();
};

function solution(babbling) {
  return babbling.filter(matchBabbling).length;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i += 1) {
    const tmpNumer = n.toString(i);
    const centerNumber = Math.ceil(tmpNumer.length / 2);

    for (let l = 0; l < centerNumber; l += 1) {
      if (tmpNumer.at(l) !== tmpNumer.at(-1 - l)) return false;
    }
  }
  return true;
};

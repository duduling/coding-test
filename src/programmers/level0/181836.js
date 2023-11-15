function solution(picture, k) {
  return picture
    .map((str) => {
      let tmp = "";

      for (let i = 0; i < str.length; i += 1) {
        tmp += str[i].repeat(k);
      }

      return Array.from({ length: k }, () => tmp);
    })
    .flat(1);
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);

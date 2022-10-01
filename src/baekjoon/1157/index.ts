// 테스트용
// const input = require("fs")
//   .readFileSync("ex.txt")
//   .toString()
//   .trim()
//   .split(/\s/);

// // 제출용
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(/\r\n|\r|\n/);

// const solution = (inputList: any) => {
//   const str = inputList[0].toUpperCase();
//   const wordList = Array(26).fill(0);

//   for (let i = 0; i < str.length; i++) {
//     wordList[str.charCodeAt(i) - 65]++;
//   }

//   const max = Math.max(...wordList);
//   const index = wordList.indexOf(max);

//   for (let j = 0; j < 26; j++) {
//     if (wordList[j] === max && index != j) {
//       return console.log("?");
//     }
//   }

//   console.log(String.fromCharCode(index + 65));
// };

// solution(input);

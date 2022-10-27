// For Test
const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // [" " | "\n"]

// My Code
function solution(input: string[]) {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  let cnt: number = 1;
  let titleNum: number = 666;
  while (cnt < n) {
    titleNum++;

    if (`${titleNum}`.includes("666")) {
      cnt++;
    }
  }
  console.log(titleNum);
}
solution(input);

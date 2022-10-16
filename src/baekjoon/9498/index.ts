// For Test
const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // [" " | "\n"]

// My Code
function solution(input: any) {
  // Initial Setting
  const score = +input[0];

  // Logic
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      console.log("A");
      break;
    case 8:
      console.log("B");
      break;
    case 7:
      console.log("C");
      break;
    case 6:
      console.log("D");
      break;
    default:
      console.log("F");
      break;
  }
}
solution(input);

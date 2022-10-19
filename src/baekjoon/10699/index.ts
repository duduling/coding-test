// For Test
// const input = `${require("fs").readFileSync("./ex.txt")}`.trim().split(" "); // // [" " | "\r\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split(" "); // [" " | "\n"]

// My Code
function solution() {
  // Initial Setting

  // Logic
  console.log(new Date().toISOString().split("T")[0]);
}
solution();

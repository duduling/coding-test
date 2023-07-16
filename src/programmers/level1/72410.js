function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");

  if (answer === "") answer = "aaa";

  return answer.length < 3
    ? answer.padEnd(3, answer.at(-1))
    : answer.slice(0, 15).replace(/\.$/, "");
}

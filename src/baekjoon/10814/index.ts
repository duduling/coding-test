// For Test with Example
export const input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
interface Member {
  age: number;
  name: string;
}
const solution = (input: string[]) => {
  // Initial Setting
  const n: number = +input[0];

  // Logic
  let answer: string = "";
  const convertMemberList: Member[] = [];

  for (let i = 1; i <= n; i += 1) {
    const [age, name]: string[] = input[i].split(" ");

    convertMemberList.push({
      age: +age,
      name,
    });
  }

  convertMemberList.sort((a: Member, b: Member) => {
    return a.age === b.age ? 1 : a.age - b.age;
  });

  for (let l = 0; l < n; l += 1) {
    const { age, name } = convertMemberList[l];

    answer += `${age} ${name}\n`;
  }

  console.log(answer);
};
solution(input);

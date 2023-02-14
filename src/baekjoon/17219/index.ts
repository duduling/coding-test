// For Test with Example
export const input = `16 4
noj.am IU
acmicpc.net UAENA
startlink.io THEKINGOD
google.com ZEZE
nate.com VOICEMAIL
naver.com REDQUEEN
daum.net MODERNTIMES
utube.com BLACKOUT
zum.com LASTFANTASY
dreamwiz.com RAINDROP
hanyang.ac.kr SOMEDAY
dhlottery.co.kr BOO
duksoo.hs.kr HAVANA
hanyang-u.ms.kr OBLIVIATE
yd.es.kr LOVEATTACK
mcc.hanyang.ac.kr ADREAMER
startlink.io
acmicpc.net
noj.am
mcc.hanyang.ac.kr`
  .trim()
  .split("\n"); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim().split("\n"); // " " | "\n"]

// My Code
const solution = (input: string[]) => {
  // Initial Setting
  const [N, M] = input[0].split(" ").map(Number);

  // Logic
  const forgotList: string[] = input.splice(N + 1);
  const passwordMap: Map<string, string> = new Map(
    input.map((val: string) => val.split(" ")) as unknown as Map<string, string>
  );

  console.log(
    forgotList.map((forgot: string) => passwordMap.get(forgot)).join("\n")
  );
};
solution(input);

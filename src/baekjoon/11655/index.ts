// For Test with Example
export const input = `Baekjoon Online Judge`.trim(); // [" " | "\n"]

// For Submit
// const input = `${require("fs").readFileSync("/dev/stdin")}`.trim(); // " " | "\n"]

// My Code
const solution = (input: string) => {
  const UPPERCASE_START = 65;
  const LOWERCASE_START = 97;
  const ALPHABET_LENGTH = 26;
  const ROT_SHIFT = 13;

  return input
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (
        code >= UPPERCASE_START &&
        code <= UPPERCASE_START + ALPHABET_LENGTH - 1
      ) {
        return String.fromCharCode(
          ((code - UPPERCASE_START + ROT_SHIFT) % ALPHABET_LENGTH) +
            UPPERCASE_START
        );
      }

      if (
        code >= LOWERCASE_START &&
        code <= LOWERCASE_START + ALPHABET_LENGTH - 1
      ) {
        return String.fromCharCode(
          ((code - LOWERCASE_START + ROT_SHIFT) % ALPHABET_LENGTH) +
            LOWERCASE_START
        );
      }

      return char;
    })
    .join("");
};
console.log(solution(input));

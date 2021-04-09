// You are given two strings pattern and s. The first string pattern contains only the symbols 0 and 1, and the second string s contains only lowercase English letters.

// Let's say that pattern matches a substring s[l..r] of s if the following 3 conditions are met:

// they have equal length;
// for each 0 in pattern the corresponding letter in the substring is a vowel;
// for each 1 in pattern the corresponding letter is a consonant.
// Your task is to calculate the number of substrings of s that match pattern.

// Note: In this task we define the vowels as 'a', 'e', 'i', 'o', 'u', and 'y'. All other letters are consonants.

// --------------- Short form answer ------------------------ //
function binaryPatternMatching(pattern, s) {
  const patternArray = pattern.split("");
  return s
    .split("")
    .slice(0, s.length - patternArray.length + 1)
    .reduce(
      (acc, current, i) =>
        acc +
        +s
          .substring(i, i + patternArray.length)
          .split("")
          .every((char, index) =>
            patternArray[index] === "1" ? !isVowel(char) : isVowel(char)
          ),
      0
    );

}

// --------------- Long (maybe more comprehensive) form answer ------------------------ //
function binaryPatternMatching1(pattern, s) {
  let answer = 0;
  const patternArray = pattern.split("");
  for (let i = 0; i <= s.length - patternArray.length; i++) {
    const substring = s.substring(i, i + patternArray.length);
    answer += Number(
      substring
        .split("")
        .every((char, index) =>
          patternArray[index] === "1" ? !isVowel(char) : isVowel(char)
        )
    );
  }

  return answer;
}

function isVowel(c) {
  return c == "a" || c == "e" || c == "i" || c == "o" || c == "u" || c == "y";
}

// const result1 =binaryPatternMatching1('010', 'amazing');
// const result2 =binaryPatternMatching('010', 'amazing');

// console.log(result1, result2)
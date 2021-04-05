
/**
 * You are implmenting yout own programming language and you've decided to 
 * add support for merging strings. A typical merge function would take two
 * strings s1 and s2, and return the lexicographically smallest result thatcan be
 * obtained by placing the symbols of s2 between the symbols of s1 in such a
 * way that maintains the relative order of the characters in each string.
 *
 * You'd like to make your language more unique, so for your merge function,
 * instead of comparing the characters in the usual lexicographical order,
 * you'll compare them based on how many times they occur in their
 * respective initial strings (fewer ocurrences means the character is considered
 * smaller). If the number of occurrences are equal, then the characters should be
 * compared in the usual lexicographical way. If both number of occurrences and
 * characters are equal, you should take the characters from the first string to the
 * result. Note that occurrences in the initial string are compared - they do not change
 * over the merge process.
 * 
 * Given two string s1 and s2, return the result of the spcial merge function you are
 * implementing
 */

function mergeStrings(s1, s2) {
  const s1Map = ocurrences(s1);
  const s2Map = ocurrences(s2);

  let result = "";
  while (!!Object.keys(s1Map).length || !!Object.keys(s2Map).length) {
    const firstKeyS1Map = Object.keys(s1Map)[0];
    const firstKeyS2Map = Object.keys(s2Map)[0];

    const [dict, letter] = (() => {
      if (!firstKeyS1Map) {
        return [s2Map, firstKeyS2Map];
      }

      if (!firstKeyS2Map) {
        return [s1Map, firstKeyS1Map];
      }

      return s1Map[firstKeyS1Map] > s2Map[firstKeyS2Map]
        ? [s2Map, firstKeyS2Map]
        : s1Map[firstKeyS1Map] < s2Map[firstKeyS2Map]
        ? [s1Map, firstKeyS1Map]
        : lexicographically(firstKeyS1Map, firstKeyS2Map, s1Map, s2Map);
    })();

    console.log(s1Map, s2Map, dict, letter, result);
    if (letter) {
      result += letter;
    }
    if (dict[letter]) {
      if (dict[letter] === 1) {
        delete dict[letter];
      } else {
        dict[letter] -= 1;
      }
    }
  }

  return result;
}

function lexicographically(letter1, letter2, s1Map, s2Map) {
  return letter1 > letter2 ? [s2Map, letter2] : [s1Map, letter1];
}

function ocurrences(str) {
  const array = [...str];
  const uniqueChars = Array.from(new Set(array));
  const ocurrence = uniqueChars.reduce((acc, current, index) => {
    const numberOfTimesRepeated = array.filter((letter) => letter === current)
      .length;
    return { ...acc, [current]: numberOfTimesRepeated };
  }, {});
  return ocurrence;
}

// const result = mergeStrings("super", "tower");
const result = mergeStrings("dce", "cccbd");

console.log(result);

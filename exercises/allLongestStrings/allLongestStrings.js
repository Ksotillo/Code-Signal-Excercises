// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  const sorted = inputArray.sort((a, b) => b.length - a.length);
  return sorted.filter((element) => sorted[0].length === element.length);
}

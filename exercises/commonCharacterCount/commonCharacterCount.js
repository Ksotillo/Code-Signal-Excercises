// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
  const s1Array = s1.split("");
  const s2Array = s2.split("");
  let counter = 0;
  const length =
    s1Array.length > s2Array.length ? s1Array.length : s2Array.length;
  for (let i = 0; i < length; i++) {
    if (s2Array.includes(s1Array[i])) {
      counter++;
      const index = s2Array.indexOf(s1Array[i]);
      s2Array.splice(index, 1);
    }
  }
  return counter;
}

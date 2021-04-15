// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
  const inputArray = inputString.split("");
  const unique = [...new Set(inputArray)];
  const stringMapped = mapToDict(inputArray, unique);
  const stringMappedValues = Object.values(stringMapped).filter(
    (value) => value % 2 === 0
  ).length;

  return (
    (stringMappedValues === unique.length && inputString.length % 2 == 0) ||
    stringMappedValues === unique.length - 1
  );
}

function mapToDict(array, unique) {
  return unique.reduce(
    (acc, current) => ({
      ...acc,
      [current]: array.filter((el) => el === current).length,
    }),
    {}
  );
}

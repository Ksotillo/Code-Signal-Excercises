// Ticket numbers usually consist of an even number of digits. 
// A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
  const nString = String(n).split("");
  if (nString.length % 2 !== 0) return false;

  const firstHalf = nString.slice(0, nString.length / 2);
  const secondHalf = nString.slice(nString.length / 2);
  const sum = (acc, current) => +acc + +current;
  return firstHalf.reduce(sum) === secondHalf.reduce(sum);
}

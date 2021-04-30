//  Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray
    .slice(1)
    .reduce(
      (acc, current, index) =>
        acc < Math.abs(current - inputArray[index])
          ? Math.abs(current - inputArray[index])
          : acc,
      0
    );
}

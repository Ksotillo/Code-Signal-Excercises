// Given an array of integers arr, a positive integer k, and an integer s, your task is to find the number of non-empty contiguous subarrays with length not greater than k and with a sum equal to s.

// Example

// For arr = [1, 0], k = 2, and s = 1, the output should be subarraysCountBySum(arr, k, s) = 2.

// There is 1 subarray among the contiguous subarrays of length 1 with sum equal to s = 1, and it is [1],
// There is 1 subarray among the contiguous subarrays of length 2 with sum equal to s = 1, and it is [1, 0].
// So the answer is 2.

// For arr = [1, 2, 4, -1, 6, 1], k = 3, and s = 6, the output should be subarraysCountBySum(arr, k, s) = 3.

// There is 1 subarray among the contiguous subarrays of length 1 with sum equal to s = 6, and it is [6],
// There is 1 subarray among the contiguous subarrays of length 2 with sum equal to s = 6, and it is [2, 4],
// There is 1 subarray among the contiguous subarrays of length 3 with sum equal to s = 6, and it is [-1, 6, 1].
// Note that the subarray [1, 2, 4, -1] would also sum to s, but its length is greater than k, so it's not applicable.

// So the answer is 3.

function subarraysCountBySum(arr, k, s) {
  let counter = 0;
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < arr.length + 1 - i; j++) {
      const subarray = arr.slice(j, j + i)
      const sum = subarray.reduce((acc, current) => acc + current)
      if (sum === s) {
        counter++;
      }
    }
  }
  return counter
}

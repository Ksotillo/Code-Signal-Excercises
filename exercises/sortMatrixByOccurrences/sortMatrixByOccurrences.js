// Given a square matrix of integers m, your task is to rearrange its numbers in the following way:

// First, sort its values in ascending order of how frequently the number occurs in m. In the case of a tie, sort the equally frequent numbers by their values, in ascending order.
// Second, place the sorted numbers diagonally, starting from the bottom right corner, like this:

// Example

// For

// m = [[ 1, 4, -2],
//      [-2, 3,  4],
//      [ 3, 1,  3]]
// the output should be

// sortMatrixByOccurrences(m) = [[3,  3,  4],
//                               [3,  4,  1],
//                               [1, -2, -2]]
// First we look at the frequency of each number:

// Number 1 occurs 2 times;
// Number -2 occurs 2 times;
// Number 3 occurs 3 times;
// Number 4 occurs 2 times.
// Because numbers 1, -2, and 4 occur the same number of times, we sort them by their values in ascending order. Number 3 occurs the most numbers of times, so it goes after all other numbers. Finally, after sorting we get the following array: [-2, -2, 1, 1, 4, 4, 3, 3, 3]

// After sorting, the numbers should be placed diagonally starting from the bottom right corner, as follows:

// [[3,  3,  4],
//  [3,  4,  1],
//  [1, -2, -2]]

function sortMatrixByOccurrences(m) {
  // Map Matrix to an Object
  const matrixMapped = mapToDict(m)
  // How many times the current value has been put into the matrix sorted
  let counter = 0;
  // Matrix dimension
  const length = m.length
  // This two for allows to go through the matrix diagonally
  for (let i = 0; i < length * 2 && Object.keys(matrixMapped).length; i++) {
    for (let j = 0; j <= i && Object.keys(matrixMapped).length; j++) {
      let maxIndex = Math.max(...Object.keys(matrixMapped).map(n => +n))
      const k = i - j
      if (j < length && k < length) {
        m[j][k] = matrixMapped[maxIndex][matrixMapped[maxIndex].length - 1]
        counter++;
        if (counter === maxIndex) {
          counter = 0;
          matrixMapped[maxIndex].pop()
          if (matrixMapped[maxIndex].length === 0) {
            delete matrixMapped[maxIndex]
          }
        }
      }
    }

  }
  return m
}
// [[1,4,-2], 
//  [-2,3,4], 
//  [3,1,3]]

// [[5,4], 
//  [4,5]]

// [[-3,5,13,0,-17,3,-19,-17,-13], 
//  [8,-9,8,-14,-16,-20,8,15,-11], 
//  [-11,-20,6,-8,-15,6,4,-2,-14], 
//  [6,2,-3,-14,18,15,8,20,3], 
//  [-6,-16,4,1,-3,20,14,-16,16], 
//  [-20,6,-8,9,19,1,11,-18,7], 
//  [-16,-2,-7,-18,10,-17,-10,-17,7], 
//  [-8,-19,-19,-11,0,-20,-20,7,1], 
//  [-15,-8,-15,-9,-5,-12,-12,-11,-8]]


function mapToDict(m) {
  const flattened = m.flat()
  const unique = Array.from(new Set(flattened))
  return unique.reduce((acc, current, index) => {
    const ocurrences = flattened.filter((element) => element === current).length
    if (acc[ocurrences]) {
      acc[ocurrences].push(current)
    } else {
      acc[ocurrences] = [current]
    }

    if (index === unique.length - 1) {
      for (let key in acc) {
        acc[key].sort((a, b) => a - b)
      }
    }

    return acc
  }, {})

  //{ 2: [-2, 1, 4], 3: [3] }
}

const result = sortMatrixByOccurrences(
  [[-3, 5, 13, 0],
  [8, -9, 8, -14],
  [-11, -20, 6, -8],
  [6, 2, -3, -14],])

for (let i = 0; i < result.length; i++) {
  console.log(result[i])
}
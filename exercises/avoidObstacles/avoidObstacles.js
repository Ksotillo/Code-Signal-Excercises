// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right.
// You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:


function avoidObstacles(inputArray) {
    let min = Infinity
    for (let i = Math.max(...inputArray) + 1; i > 0; i--) {
        const result = inputArray.every(element => element % i != 0)
        if (result) {
            min = i
        }
    }
    return min
}

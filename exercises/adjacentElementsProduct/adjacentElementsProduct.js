// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product

function adjacentElementsProduct(inputArray) {
    max = -Infinity;
    for (let i = 0; i < inputArray.length - 1; i++) {
        const current = inputArray[i];
        const next = inputArray[i + 1];
        const product = current * next;
        if (max < product) {
        max = product;
        }
    }
    return max;
}

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function almostIncreasingSequence(sequence) {
    let removed = 0;
    for (let i = 0; i < sequence.length - 1; i ++) {
        const current = sequence[i]
        const next = sequence[i + 1]
        if (next <= current) {
            if (i == sequence.length - 2) {
                sequence.splice(i+1, 1)
            } else {
                sequence.splice(i, 1)
            }
            removed++;
            if (removed == 2) {
                return false
            }
        }
    }
    return sequence.slice(1).every((element, index) => element > sequence[index]);
}

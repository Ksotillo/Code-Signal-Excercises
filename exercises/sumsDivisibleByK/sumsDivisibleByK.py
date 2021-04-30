# You are given an array of integers a and an integer k. Your task is to calculate the number of ways to pick two different indices i < j, such that a[i] + a[j] is divisible by k.

# Example

# For a = [1, 2, 3, 4, 5] and k = 3, the output should be sumsDivisibleByK(a, k) = 4.

# There are 4 pairs of numbers that sum to a multiple of k = 3:

# a[0] + a[1] = 1 + 2 = 3
# a[0] + a[4] = 1 + 5 = 6
# a[1] + a[3] = 2 + 4 = 6
# a[3] + a[4] = 4 + 5 = 9

# This solution did not pass all the test, it did not pass the hidden test because it was too slow and did not execute below 3 seconds

def sumsDivisibleByK(a, k):
    divisors = []
    rango = range(len(a))
    for index in rango:
        for secondIndex in range(index + 1, len(a)):
            suma = a[index] + a[secondIndex]
            if suma % k ==0:
                divisors.append(suma)
    return len(divisors)
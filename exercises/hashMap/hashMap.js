// You've created a new programming language, and now you've decided to add hashmap support to it.
// Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values.
// So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

// insert x y - insert an object with key x and value y.
// get x - return the value of an object with key x.
// addToKey x - add x to all keys in map.
// addToValue y - add y to all values in map.
// To test out your new hashmap, you have a list of queries in the form of two arrays:
// queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

// Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

// For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]],
//  the output should be hashMap(queryType, query) = 5.

// The hashmap looks like this after each query:

// 1 query: {1: 2}
// 2 query: {1: 2, 2: 3}
// 3 query: {1: 4, 2: 5}
// 4 query: {2: 4, 3: 5}
// 5 query: answer is 5
// The result of the last get query for 3 is 5 in the resulting hashmap.

// For queryType = ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"] and query = [[1, 2], [2], [1], [2, 3], [1], [-1], [3]], the output should be hashMap(queryType, query) = 6.

// The hashmap looks like this after each query:

// 1 query: {1: 2}
// 2 query: {1: 4}
// 3 query: answer is 4
// 4 query: {1: 4, 2: 3}
// 5 query: {2: 4, 3: 3}
// 6 query: {2: 3, 3: 2}
// 7 query: answer is 2
// The sum of the results for all the get queries is equal to 4 + 2 = 6.

// ----------------------------------- READ PLEASE -------------------------------------- //
// This solution is not the most efficient. I got a score of 153/300


/**Hash map */
let hash = {}
/**Operations dict */
const operationsDict = {
  insert: insert,
  addToValue: addToValue,
  addToKey: addToKey,
  get: getValue,
}

function hashMap(queryType, query) {
  /**Returnable */
  let result = 0
  queryType.forEach((Query, index) => {
    /**Operation to do */
    const operation = operationsDict[Query]
    /**Operators for operation */
    const operators = query[index]
    /**Result of the operation */
    const resultOfQuery = operation(...operators)

    if (resultOfQuery) {
      //Its a get result should add to returnable
      result += resultOfQuery
    }
  })
  return result
}

function insert(key, value) {
  hash[key] = value
}

function addToValue(x) {
  for (key in hash) {
    hash[key] += x
  }
}

function addToKey(x) {
  const newHash = {}
  for (key in hash) {
    newHash[+key + x] = hash[key]
  }
  hash = newHash
}

function getValue(x) {
  return hash[x]
}

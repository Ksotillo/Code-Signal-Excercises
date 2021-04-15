// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function reverseInParentheses(inputString) {
  return reverse(inputString);
}

function reverse(inputString) {
  // if we have any remaining word in parentheses
  if (
    inputString.includes("(") &&
    inputString.includes(")") &&
    inputString.length > 0
  ) {
    // We get the closing parentheses
    const closing = inputString.indexOf(")");
    // We get the opening parentheses
    const opening = inputString.substring(0, closing).lastIndexOf("(");
    // Trim the opening parentheses
    const start = inputString.substring(0, opening);
    // Reverse the middle
    const middle = inputString
      .substring(opening + 1, closing)
      .split("")
      .reverse()
      .join("");
    // Trim the closing parentheses
    const end = inputString.substring(closing + 1, inputString.length);
    // We make a new call so we can handle any other word remaining
    return reverse(start + middle + end);
  }
  // If we have no words remaining to reverse then just return the string
  return inputString;
}

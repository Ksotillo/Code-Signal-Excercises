// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
  const length = picture[0].length;
  const border = Array(length + 2)
    .fill("*")
    .join("");
  return [border, ...picture.map((element) => `*${element}*`), border];
}

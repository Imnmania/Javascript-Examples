/**
 ** ---------
 ** FUNCTIONS
 ** ---------
 */
"use strict";

function logger() {
  console.log("My name is John");
}

//? calling | running | invoking
logger();
logger();
logger();
console.log("-------------");

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(3, 2));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
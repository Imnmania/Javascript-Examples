/**
 ** ---------------------------------
 ** FUNCTIONS CALLING OTHER FUNCTIONS
 ** ---------------------------------
 */

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${apples} apples (${applePieces} pieces) and ${oranges} oranges (${orangePieces} pieces)`;
    return juice;
}

console.log(fruitProcessor(5, 2));
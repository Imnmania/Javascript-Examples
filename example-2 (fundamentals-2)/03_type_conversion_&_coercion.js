/** 
** --------------------------
** TYPE CONVERSION & COERCION
** --------------------------
*/

//* type conversion
//? string to number
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 20);

//? whenever number conversion fails
//? it should return NaN (Not a Number)
console.log(Number('John'));
console.log(typeof (NaN));

//? number to string
console.log(String(inputYear));


//* type coercion
console.log('I am ' + 23 + ' years old');
//! only plus is restricted
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
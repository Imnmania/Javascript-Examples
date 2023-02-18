/** 
** ---------------------------
** STRINGS & TEMPLATE LITERALS
** ---------------------------
*/
const firstName = 'John';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const john = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job
console.log(john);

//? use backticks (symbol above tab key) to initiate template literals
const johnNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(johnNew);
console.log('-------------');

//? backticks can be used even if there is no template literals
console.log(`Just a regular string...`);
console.log('-------------');

//? multiline string (old buggy way)
console.log('String with \n\
multiliple \n\
lines');
console.log('-------------');

//? multiline string (with string literals)
console.log(`String with
multiple
lines`);
console.log('-------------');


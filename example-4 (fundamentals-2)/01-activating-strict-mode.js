/**
** -----------
** STRICT MODE
** -----------
*/
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log('I can drive');
}

console.log('---------------');

//? strict mode restricts from using reserved words
// const interface = 'Audio';
// const private = '123';

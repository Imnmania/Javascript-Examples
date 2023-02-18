/**
 ** ----------------------------------
 ** FUNCTION DECLARATION VS EXRPESSION
 ** ----------------------------------
 */

//? Function Declaration
//? Function Declarations can be called before they are defined
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge1(1995));

console.log('-----------');

//? Function Expresssion or Anonymous function
//? Function Expressions cannot be called before they are defined
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge2(1995));
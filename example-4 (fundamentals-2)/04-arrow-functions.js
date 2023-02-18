/**
 ** ---------------
 ** ARROW FUNCTIONS
 ** ---------------
 */
//! Arrow functions does not get a "this" keyword

//? single parameter, single line
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1995));

console.log('-----------');

//? single parameter, multi line
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    return retirementAge;
};
console.log(yearsUntilRetirement(1995));
console.log('-----------');

//? multiple parameters, multi line
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`;
};
console.log(yearsUntilRetirement2(1995, 'Kon'));

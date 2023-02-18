/**
 ** ------
 ** ARRAYS
 ** ------
 */
'use strict';

const friends = ['Micahel', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1993);
console.log(years);

// getting the first element
console.log(friends[0]);

// getting the second element
console.log(friends[1]);

// getting the length of array
console.log(friends.length);

// getting the last element
console.log(friends[friends.length - 1]);

// change or mutate the array
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2090 - 1995, friends];
console.log(jonas);

// Excercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearList = [1990, 1967, 2002, 2010, 2018];
console.log(yearList);

yearList.forEach((item) => {
    console.log(calcAge(item));
});

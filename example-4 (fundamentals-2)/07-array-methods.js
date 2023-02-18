/**
 ** -------------
 ** ARRAY METHODS
 ** -------------
 */
'use strict';

const friends = ['Micahel', 'Steven', 'Peter'];
console.log(friends);

// adding an element to the end
// push method returns the length of the new array
const newLength = friends.push('John');
console.log(friends);
console.log(newLength);

// add elements to beginning of array
friends.unshift('Jay');
console.log(friends);

// remove last element
friends.pop();
console.log(friends);

// remove first element
friends.shift();
console.log(friends);

// read index of an element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
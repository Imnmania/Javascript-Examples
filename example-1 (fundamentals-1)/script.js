/**--------------------------------- */
/**
 * VARIABLES
 */
/**--------------------------------- */

let js = 'amazing';
// if (js === 'amazing') alert('Javascript is amazing!!!');
console.log(js);

let firstName = "Jonas";
console.log(firstName);

// let 3years = 3 //! invalid
let PI = 3.14;
console.log(PI);

/**--------------------------------- */
/** 
 * DATA TYPES
 */
/**--------------------------------- */

//? boolean
let a = true
console.log(a);

//? use typeof() to check data type
console.log(typeof (a));
console.log(typeof (myVariable));

//? dynamic typing
a = 'Hello' // re assigning also changes the type accordingly
console.log(a);
console.log(typeof (a));

//? undefined
let year;
console.log(year);
console.log(typeof (year));

//? number 
year = 1990
console.log(year);
console.log(typeof (year));

//? null
console.log(typeof (null));


/**--------------------------------- */
/** 
 * DECLARING VARIABLES IN DIFFERENT WAYS
 */
/**--------------------------------- */

//? can be changed
let age = 30;
age = 31;

//? cannot be changed (immutable)
const birthYear = 1995;
// birthYear = 123; //! illegal, consts can't be re-assigned
console.log(birthYear);
// const job; //! illegal, consts must be initialized

//? this should be avoided at all costs
var job = 'programmer'
console.log(job);
job = 'teacher'
console.log(job);

//* Let is block scoped
//* Var is function scoped

//! avoid assigning variables without let/var/const
lastName = 'Biswas'
console.log(lastName);


/**--------------------------------- */
/** 
 * OPERATORS
 */
/**--------------------------------- */
const now = 2023;
const age1 = now - 1995;
const age2 = now - 1992;
console.log(age1, age2);

console.log(age1 * 2)
console.log(age1 / 2)
console.log(age1 / 3)
console.log(2 ** 3);

const fName = 'Niloy';
const lName = 'Biswas';
console.log(fName + ' ' + lName);

let x = 10 + 5;
x += 10;
console.log(x);
x++;
console.log(x);
++x;
console.log(x);

console.log(age1 > age2); // >, <, >=, <=, ==, ===


/**--------------------------------- */
/**
 * OPERATOR PRECEDENCE
 */
/**--------------------------------- */
//? reference: MDN precedence
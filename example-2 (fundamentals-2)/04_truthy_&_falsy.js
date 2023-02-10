/** 
** ---------------------
** TRUTHY & FALSY VALUES
** ---------------------
*/

/**
 *? In javascript, there are 5 falsy values
 *? 1. 0
 *? 2. ''
 *? 3. undefined
 *? 4. null
 *? 5. NaN
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('John'));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job`);
}

let height;
if (height) {
    console.log(`Height is defined`);
} else {
    console.log(`Height is un-defined`);
}
/** 
** ------------------
** EQUALITY OPERATORS
** ------------------
*/

const age = 18;

//? tight equality
if (age === 18) console.log(`You just became an adult`);

//? loose equality (type coercion by default)
if (age == '18') console.log(`You just became an adult again`);

const favorite = Number(prompt('Whats your favorite number?'));
console.log(`Favorite value is ${favorite}`);
console.log(typeof (favorite));

if (favorite === 123) {
    console.log('Cool, 123! is an amazing number');
} else if (favorite === 7) {
    console.log('7 is also an amazing number');
} else {
    console.log('Number is neither 7 nor 123');
}

//? no equal
if (favorite !== 23) {
    console.log('Why not 23?');
}
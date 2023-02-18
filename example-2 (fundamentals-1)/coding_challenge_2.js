/**
 * CODING CHALLENGE #1
 * 
 * Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
 * 
 * 1. Print a nice output to the console, saying who has the higher BMI. The message can
 * be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * 2. Use a template string to include the BMI values in the outputs. Example: "Mark's 
 * BMI (28.3) is higher than John's (23.9)!"
 */

// const marksMass = 78
// const marksHeight = 1.69
// const johnsMass = 92
// const johnsHeight = 1.95

const marksMass = 95
const marksHeight = 1.88
const johnsMass = 85
const johnsHeight = 1.76

const marksBMI = marksMass / marksHeight ** 2
const johnsBMI = johnsMass / johnsHeight ** 2
const markHigherBMI = marksBMI > johnsBMI
console.log(marksBMI, johnsBMI, markHigherBMI);

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI is higher than John's ${marksBMI.toFixed(2)}!`);
} else if (johnsBMI > marksBMI) {
    console.log(`John's BMI is higher than Mark's ${johnsBMI.toFixed(2)}!`);
}
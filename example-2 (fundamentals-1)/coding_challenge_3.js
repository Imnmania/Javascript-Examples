/**
 * 1. Calculate the average score for each team, using the test data below
 * 
 * 2. Compare the teams average scores to determine the winner of the competition,
 * and print it to the console. Don't forget that there can be a draw, so the test
 * for that as well (draw means they have the save average score).
 * 
 * 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
 * team only winsif it has a higher score than the other team, and the same time a 
 * score of at least 100 points. HINT: Use a logical operator to test for minimum 
 * score, as well as multiple else-if block
 * 
 * 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
 * both teams have the same score and both have a score greater or equal 100 points.
 * Otherwise, no team wins the trophy
 * 
 * TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 * TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 96 and 123.
 * TEST DATA BONUS 2: Dolphins score 97, 112 and 101, Koalas score 109, 95 and 106
 */

//? solution 1
const avgDolphinScore = (96 + 108 + 89) / 3;
const avgKoalaScore = (88 + 91 + 110) / 3;
console.log(`Average of Dolphin = ${avgDolphinScore.toFixed(2)}
Average of Koala = ${avgKoalaScore.toFixed(2)}`);

if (avgDolphinScore > avgKoalaScore) {
    console.log(`Winner is Dolphin`);
} else if (avgDolphinScore < avgKoalaScore) {
    console.log(`Winner is Koala`);
} else {
    console.log(`It's a draw between Dolphins and Koalas`);
}
console.log(`-----------------`);

//? Bonus 1
const avgDolphinScoreB1 = (97 + 112 + 101) / 3;
const avgKoalaScoreB1 = (88 + 91 + 110) / 3;

if (avgDolphinScoreB1 >= 100 && (avgDolphinScoreB1 > avgKoalaScoreB1)) {
    console.log(`Winner is Dolphin with avg score = ${avgDolphinScoreB1.toFixed(2)}`);
} else if (avgKoalaScoreB1 >= 100 && (avgKoalaScoreB1 > avgDolphinScoreB1)) {
    console.log(`Winner is Koala with avg score = ${avgKoalaScoreB1.toFixed(2)}`);
} else if ((avgDolphinScoreB1 === avgKoalaScoreB1) && (avgDolphinScoreB1 >= 100) && (avgKoalaScoreB1 >= 100)) {
    console.log(`It's a draw between Dolphins and Koalas`);
}
console.log(`-----------------`);

//? Bonus 2
const avgDolphinScoreB2 = (97 + 112 + 101) / 3;
const avgKoalaScoreB2 = (109 + 95 + 106) / 3;

if (avgDolphinScoreB2 >= 100 && (avgDolphinScoreB2 > avgKoalaScoreB2)) {
    console.log(`Winner is Dolphin with avg score = ${avgDolphinScoreB2.toFixed(2)}`);
} else if (avgKoalaScoreB2 >= 100 && (avgKoalaScoreB2 > avgDolphinScoreB2)) {
    console.log(`Winner is Koala with avg score = ${avgKoalaScoreB1.toFixed(2)}`);
} else if ((avgDolphinScoreB2 === avgKoalaScoreB2) && (avgDolphinScoreB2 >= 100) && (avgKoalaScoreB2 >= 100)) {
    console.log(`It's a draw between Dolphins and Koalas`);
}
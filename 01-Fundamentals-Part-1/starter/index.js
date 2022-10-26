/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
const markMass1 = 78;
const markHeight1 = 1.69;

const johnMass1 = 92;
const johnHeight1 = 1.95;

const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

function bmi(mass, height) {
  return (bmi = mass / height ** 2).toFixed(2);
}

console.log(bmi(markMass1, markHeight1));

markisHigher = markMass1 > johnMass1;
markisHigher ? "Mark higher" : "John higher";
console.log(markisHigher);

johnisHigher = johnMass2 > markMass2;
johnisHigher ? "John higher" : "Mark higher";
console.log(johnisHigher);

let age = "18"; // -> string
console.log(age + 1); //181
console.log(Number(age) + 1); //19

let num = String(0);
console.log(typeof num); //string

console.log(typeof NaN); //number

console.log("I am " + 38 + " years old");

console.log("100" - "20" - 5);

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean("Elaine")); //true
console.log(Boolean({})); //true
//Undefined is a falsy value, therefore, we have "It's undefined" in the console
let age1;
if (age1) {
  console.log("Now I know your age");
} else {
  console.log("Age is UNDEFINED");
}
const age2 = 18;
if (age2 === 18) console.log("adult");

const celebration = Number(prompt("Give me 10 to celebrate"));
console.log(typeof celebration); //number
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolp1 = (96 + 108 + 89) / 3;
console.log(dolp1);
let koa1 = (96 + 108 + 89) / 3;
console.log(koa1);
if (dolp1 > koa1) {
  console.log("Dolphins won");
} else if (koa1 > dolp1) {
  console.log("Koalas won");
} else {
  console.log("Draw");
}

let dolpBonus1 = (97 + 112 + 101) / 3;
console.log(dolpBonus1);
let koaBonus1 = (109 + 95 + 123) / 3;
console.log(koaBonus1);
if (dolpBonus1 > koaBonus1 && dolpBonus1 >= 100) {
  console.log("Dolphins won");
} else if (koaBonus1 > dolpBonus1 && koaBonus1 >= 100) {
  console.log("Koalas won");
} else {
  console.log("Draw");
}

let dolpBonus2 = (97 + 112 + 101) / 3;
console.log(dolpBonus2);
let koaBonus2 = (109 + 95 + 106) / 3;
console.log(koaBonus2);
if (dolpBonus2 > koaBonus2 && dolpBonus2 >= 100) {
  console.log("Dolphins won");
} else if (koaBonus2 > dolpBonus2 && koaBonus2 >= 100) {
  console.log("Koalas won");
} else if (dolpBonus2 === koaBonus2 && koaBonus2 >= 100 && dolpBonus2 >= 100) {
  console.log("Draw");
} else {
  console.log("Nobody wins");
}


let age4 = 17;
console.log(`I like to drink ${age4>=18?'wine':'water'}.`);
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

let bill = 275;
let tip15 = bill*(15/100);
let tip20 = bill*(20/100);

let count = bill >= 50 && bill <= 300 ? tip15 : tip20;
console.log(count);
console.log(`The bill was ${bill}, the tip was ${tip15}, and the total value ${count}`);



const isIsland = false;
let language;
let population = 216000000;
let country = "Brazil";

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

language = "Portuguese";
console.log(typeof language);

let nordeste = population / 2;
let outros = population / 2;
console.log(++nordeste);

let finland = 6000000;
console.log(finland > nordeste);
let average = 33000000;
console.log(nordeste > average);
let description = `${country} is in America, and its ${population} million people speak ${language}`;
console.log(description);

console.log(
  population > 33000000
    ? `${country}s population is above average`
    : `${country}s population is ${population - 33000000} million below average`
);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

/*
The Complete JavaScript Course 7
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation

let numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only one border!");
} else if (numNeighbours === 0) {
  console.log("No borders");
}

LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/

let isEnglishSpeakingCountry = false;
let hasLessThan50Million = false;
let isNotAnIsland = true;
console.log(
  isEnglishSpeakingCountry && hasLessThan50Million && isNotAnIsland
    ? "You should live in Brazil"
    : "Brazil does not meet your criteria"
);

/*
Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

const language1 = "Spanish";

switch (language1) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

/*
If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);

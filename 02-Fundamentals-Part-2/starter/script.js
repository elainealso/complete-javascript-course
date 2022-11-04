"use strict mode";

const variableName = function (year1, year2) {
  return year1 + year2;
};

console.log(variableName(11, 11));

const variableName1 = (parameter1, parameter2) => parameter1 - parameter2;
console.log(variableName1(10, 5));

const variableName2 = (birth) => {
  const age = 2022 - birth;
  const retirement = 65 - age;
  return retirement;
};
console.log(variableName2(1984));

//Functions calling other functions
//DRY purposes
const cutPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
console.log(fruitProcessor(2, 3));

const calcAge = function (birth) {
  return 2022 - birth;
};
const yearsRetirement = function (birth, firstName) {
  const age = calcAge(birth);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsRetirement(1987, "Alexandre"));

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

//1
const calcAverage = (v1, v2, v3) => (v1 + v2 + v3) / 3;
//2
let dolphins1 = calcAverage(44, 23, 71);
let dolphins2 = calcAverage(85, 54, 41);
let koalas1 = calcAverage(65, 54, 49);
let koalas2 = calcAverage(23, 34, 27);

console.log(dolphins1, koalas1);

function checkWinner(avgK, avgD) {
  if (avgK > avgD && avgK >= avgD * 2) {
    return `Koalas win (${avgK} vs ${avgD})`;
  } else if (avgD > avgK && avgD >= avgK * 2) {
    return `Dolphins win (${avgD} vs ${avgK})`;
  } else {
    return "Nobody";
  }
}
console.log(checkWinner(dolphins1, koalas1));
console.log(checkWinner(dolphins2, koalas2));

const friends = ["Mari", "Isa", "Camila", "Luciana"]; //One way
console.log(friends[0]);
const years = new Array(1984, 1987, 1948); //Another way
console.log(years);
console.log(years.length); //number of elements
console.log(years.length - 1); //index of the last element of the array
friends[0] = "Lia";
console.log(friends); //["Lia", "Isa", "Camila", "Luciana"]

const alexandre = ["Elaine", "Fátima", 2022 - 1987];
console.log(alexandre);

const calcAge1 = function (birth) {
  return 2022 - birth;
};
const age1 = calcAge1(years[0]);
console.log(age1); //38
const age4 = calcAge1(years[years.length - 1]);
console.log(age4); //74
let arr1 = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(arr1);

let variable = ["element 1", "element 2", "element 3"];
const newLength = variable.push("element 4");
console.log(newLength); //4
console.log(variable); //["element 1","element 2","element 3","element 4"]

variable.unshift("element 0");
console.log(variable);

variable.pop();
console.log(variable); //["element 1","element 2","element 3"]

variable.shift();
console.log(variable);

console.log(variable.indexOf("element 7")); //-1

console.log(variable.includes("element 7")); //false
console.log(variable.includes("element 3")); //true

variable.unshift(1);
console.log(variable);
console.log(variable.includes("1")); //false

if (friends.includes("Camila")) {
  console.log("I miss Camila very much");
}

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)

let testData = [125, 555, 44];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(testData[0]));

let arr = [calcTip(testData[0]), calcTip(testData[1]), calcTip(testData[2])];
console.log("arr = array of tips", arr);
console.log("testData = array of bills", testData);
let total = [testData[0] + arr[0], testData[1] + arr[1], testData[2] + arr[2]];
console.log(total); //[143.75, 573.75, 52.8]

const obj = {
  key1: "value1", //property key1 with the value of value1
  key2: "value2", //property key2 with the value of value2
  key3: "value3", //property 'key3' with the value of 'value3'
};

// Dot notation
console.log(obj.key1); //value1
// Bracket notation
console.log(obj["key1"]); //value1
const nameKey = "key"; //repeating part
console.log(obj[nameKey + "1"]); //value1
//Another example:
const user = {
  firstName: "Elaine",
  lastName: "Bargiela",
};
const repeatingPart = "Name";
console.log(user["first" + repeatingPart]); //Elaine

const objName = {
  firstName: "Elaine",
  lastName: "Bargiela",
};

// const promptVariable = prompt("firstName or lastName?");

// console.log(objName[promptVariable]); //my object's name[user's answer, the key] -> the answer grabs the corresponding value property
//falsy value
// if (objName[promptVariable]){
//   console.log(objName[promptVariable]);
// } else {
//   console.log('wrong value');
// }

// if (objName[promptVariable]) {
//   console.log(objName[promptVariable]); //if the user inserts the right key
// } else {
//   console.log("There's no such key here"); //if the user inserts sth is not in the object
// }

obj.key4 = "value4";
obj["key5"] = ["arrayValue1", "arrayValue2", "arrayValue3"];
console.log(obj); //Object { key1: "value1", key2: "value2", key3: "value3", key4: "value4", key5: Array(3)[("arrayValue1", "arrayValue2", "arrayValue3")];
console.log(obj.key5.length); //3

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sc",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
//'Jonas has 3 friends, and his best friend is called Michael'//Jonas, 3, Michael

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const user1 = {
//   firstName: "Alexandre",
//   birthYear: 1987,
//   funcName: function(){
//     return 2022-this.birthYear;
//   }
// };

// console.log(user1.funcName());//35

//If I need to repeat the age multiple times, it's best practice to store it in a variable
// const user1 = {
//   firstName: "Alexandre",
//   birthYear: 1987,
//   funcName: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(user1.funcName()); //without this line, next lines don't work
// console.log(user1.age); //35
// console.log(user1.age); //35

//Jonas is a 46-year old teacher and he has a drivers licenser or no driver's license

const jonas = {
  firstName: "Jonas",
  lastName: "Sc",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  funcName: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  method: function () {
    this.hasDriversLicense
      ? console.log(
          `${this.firstName} is a ${this.age}-year old ${this.job} and he has a driver's license`
        )
      : console.log(
          `${this.firstName} is a ${this.age}-year old ${this.job} and he has no driver's license`
        );
  },
};

jonas.method(true);

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
  fullName: "Mark Miller",
  bmiFunc: function (mass, height) {
    this.bmi = (bmi = this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
  height: 1.69,
  mass: 78,
};

const john = {
  fullName: "John Smith",
  bmiFunc: function (mass, height) {
    this.bmi = (bmi = this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
  height: 1.95,
  mass: 92,
};

console.log(mark.bmiFunc()); //27.31
console.log(john.bmiFunc()); //24.19
mark.bmi;
john.bmi;

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmiFunc()}) is higher than ${
      john.fullName
    }'s (${john.bmiFunc()})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmiFunc()}) is higher than ${
      mark.fullName
    }'s (${mark.bmiFunc()})`
  );
}
//keeps running while condition is true
for (let i = 2; i <= 6; i++) {
  // i++ = i = i + 1
  // from 2 to 6
  console.log(`loop ${i}`);
  //loop 2, loop 3, loop 4, loop 5, loop 6
}

const array = [
  "element 1",
  "element 2",
  "element 3",
  ["element 4", "element 5"],
];

const types = [];

for (let i = 0; i < array.length; i++) {
  console.log(array[i], typeof array[i]);
  //element 1 string, element 2 string, element 3 string, Array [ "element 4", "element 5" ] object;

  //types[i] = typeof array[i];//filling types array
  types.push(typeof array[i]);
}
console.log("==========", types);

//Return in an array
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

//Return without array
for (let i = 0; i < years.length; i++) {
  console.log(2022 - years[i]);
}

//Assignment Functions
function describeCountry(country, pop, capitalCity) {
  console.log(
    `${country} has ${pop} million people and its capital city is ${capitalCity}`
  );
}

// describeCountry('Brazil', 216, 'Brasilia');
// // Function Declarations vs. Expressions
// function percentageOfWorld1 (country, pop){
//   perc = (pop/7900)*100
//   return `${country} has ${pop} people, so it's about ${Math.round(perc)}% of
// the world population`;
// }
// let china = percentageOfWorld1('China', 1441);
// let brazil = percentageOfWorld1("Brazil", 214);
// let usa = percentageOfWorld1("USA", 331);
// console.log(china);
// console.log(brazil);
// console.log(usa);

// describeCountry("Brazil", 216, "Brasilia");

// //!ASK SOMEONE
// function percentageOfWorld1(country, pop) {
//   perc = (pop / 7900) * 100;
//   if (pop.length === 3) {
//     return `${country} has ${pop} million people, so it's about ${Math.round(
//       perc
//     )}% of
// the world population`;
//   } else if (pop.length === 4) {
//     return `${country} has ${pop} billion people, so it's about ${Math.round(
//       perc
//     )}% of
// the world population`;
//   }
// }
// let china = percentageOfWorld1("China", 1441);
// let brazil = percentageOfWorld1("Brazil", 214);
// let usa = percentageOfWorld1("USA", 331);
// console.log(china);
// console.log(brazil);
// console.log(usa);

describeCountry("Brazil", 216, "Brasilia");

// Function Declarations vs. Expressions
function percentageOfWorld1(pop) {
  return Math.round((perc = (pop / 7900) * 100));
}
let china = percentageOfWorld1(1441);
let brazil = percentageOfWorld1(214);
let usa = percentageOfWorld1(331);
console.log(china); //18
console.log(brazil); //3
console.log(usa); //4
describeCountry("Brazil", 216, "Brasilia");
//Brazil has 216 million people and its capital city is Brasilia

const describePop = function (country, pop) {
  let perc = percentageOfWorld1(pop);
  //DON'T FORGET: the parameter is the same for both functions
  return `${country} has ${pop} million people, which is about ${perc}% of the world`;
};
console.log(describePop("China", 1441));
//China has 1441 million people, which is about 18% of the world

//Assignments  Introduction to Arrays
const populations = [1441, 214, 331, 142];
console.log(populations.length === 4); //true
const arrPerc = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(arrPerc); //[18, 3, 4, 2]

//Assignments  Basic Array Operations (Methods)
const neighbours = [
  "Denmark",
  "Poland",
  "the Netherlands",
  "Belgium",
  "Luxembourg",
  "France",
  "Switzerland",
  "Austria",
  "Czech Republic",
];
console.log(neighbours.push("Utopia")); //10 -> new length
// console.log(neighbours);
console.log(neighbours.pop()); //Utopia
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
}

neighbours[5] = "any other country";
console.log(neighbours);

neighbours[neighbours.indexOf("Austria")] = "another try";
console.log(neighbours);

const myCountry = {
  country: "Germany",
  capital: "Berlin",
  language: "German",
  pop: 83,
  neighbours: [
    "Denmark",
    "Poland",
    "the Netherlands",
    "Belgium",
    "Luxembourg",
    "France",
    "Switzerland",
    "Austria",
    "Czech Republic",
  ],
  describe: function () {
    console.log(
      `${this.country} has ${this.pop} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

//Assignment  Dot vs. Bracket notation
console.log(
  `${myCountry.country} has ${myCountry.pop} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry["pop"] += 2;
console.log(myCountry); // ...85
myCountry["pop"] -= 2;
console.log(myCountry); // ...83

//Assignment  Object Methods
myCountry.describe();
console.log(myCountry.checkIsland());

//Loops
//continue (same as skip) access the current iteration of the loop and continue to the next one
const ar = [true, "one", "two", 1, 2];
for (let i = 0; i < ar.length; i++) {
  if (typeof ar[i] !== "string") continue;
  //same as saying: skip the others, I just want strings
  console.log(ar[i], typeof ar[i]); //one string, two string
}
//break completely terminates the whole loop
for (let i = 0; i < ar.length; i++) {
  if (typeof ar[i] === "number") break;
  //same as saying: stop when you find a number
  console.log(ar[i], typeof ar[i]); //true boolean, one string, two string
}

//Assignment for loop
for (let i = 0; i < 50; i++) {
  console.log("Voting for Lula");
}

// Assignment  Looping Arrays, Breaking and Continuing
const newPop = [1441, 214, 331, 142];
const percentages = [];
for (let i = 0; i < newPop.length; i++) {
  let result = percentageOfWorld1(newPop[i]);
  percentages.push(result);
}
console.log(percentages); //[18, 3, 4, 2]

//Loop backwards -> from index 3 to index 0
const arr2 = [
  "element 1",
  "element 2",
  "element 3",
  ["element 4", "element 5"],
];

for (let i = arr2.length - 1; i >= 0; i--) {
  //it starts from the last element (arr2.length-1), goes to the first (0), and decrements
  console.log(i, arr2[i]);
  //i -> index
  //3 Array [ "element 4", "element 5" ], 2 element 3, 1 element 2, 0 element 1
}

//Loop inside of a loop
for (let dci = 1; dci < 6; dci++) {
  console.log(`----> DCI course - Day ${dci} of the week`);

  for (let c = 1; c < 4; c++) {
    console.log(`Classes ${c}`);
  }
}

// ----> DCI course - Day 1 of the week
// Classes 1 script.
// Classes 2
// Classes 3
// ----> DCI course - Day 2 of the week
// Classes 1
// Classes 2
// Classes 3
// ----> DCI course - Day 3 of the week
// Classes 1
// Classes 2
// Classes 3
// ----> DCI course - Day 4 of the week
// Classes 1
// Classes 2
// Classes 3
// ----> DCI course - Day 5 of the week
// Classes 1
// Classes 2
// Classes 3

//While loop
//We can only specify the condition

// FOR LOOP
// for (let i = 2; i <= 6; i++) {
//   console.log(`loop ${i}`);
// }
// WHILE LOOP

let i = 2; //repetitions in the beginning
while (i <= 6) {
  //it will run while this condition is true
  console.log(`While loop ${i}`); //code we want to execute
  i++; //we increase the counter at the end
}

let dice = Math.trunc(Math.random() * 6) + 1;
//Math.trunc() returns the integer part of a number by removing any fractional digits Ex: -0.123 becomes -0
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
console.log(dice); //output: random number from 1 to 6
while (dice !== 6) {
  //as soon as the value is 6, it will stop
  console.log(`You rolled a ${dice}`); //without the code below, if I save, the loop will run into an infinite loop because we are creating only one dice value (if different than 6, it will print this, so it will run forever)
  //To keep creating new dice values, we use the code below:
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// Output example (example because it is random):
// You rolled a 3
// You rolled a 2
// Loop is about to end...

// Coding challenge
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(tips);
console.log(totals);

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(average([2, 3, 7]));
console.log(average(totals));

//Assignment  Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

const outside = [
  ["inside1", "inside1"],
  ["inside2"],
  ["inside3", "inside3", "inside3"],
];

for (let i = 0; i < outside.length; i++) {
  console.log("Outside");
  for (let y = 0; y < outside[i].length; y++) {
    console.log(`Inside ---> ${outside[i]}`);
  }
}

const outer = [
  ["Zero index 0", "Zero index 1"],
  ["One index 0"],
  ["Two index 0", "Two index 1", "Two index 2"],
];

for (let i = 0; i < outer.length; i++) {
  console.log(`First/Outer -> index ${[i]}`); //[i] is the first array of 3 arrays
  for (let y = 0; y < outer[i].length; y++) {
    console.log(` -> ${outer[i][y]}`); //[i][y] is the inner iteration (0, 1, then 0, then 0, 1, 2)
  }
}
/*
First/Outer -> index 0 
 -> Zero index 0 
 -> Zero index 1 
First/Outer -> index 1 
 -> One index 0 
First/Outer -> index 2 
 -> Two index 0 
 -> Two index 1 
 -> Two index 2
*/

//Assignment The while Loop
const percentages3 = [];
let y = 0;
while (y < newPop.length) {
  const result = percentageOfWorld1(newPop[y]);
  percentages3.push(result);
  y++;
}
console.log(percentages3); //[18, 3, 4, 2]

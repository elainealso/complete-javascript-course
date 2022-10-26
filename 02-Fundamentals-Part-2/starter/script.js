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

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
*/
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

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

let testData = [125, 555, 44];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(testData[0]));

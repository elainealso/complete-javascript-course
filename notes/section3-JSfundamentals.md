# Javascript Fundamentals - Part 2

## Strict mode

Using strict mode in the beginning of the js file helps us to avoid certain errors:

```
'use strict';
```

It also reserves words that may be implemented in the future.

**Functions receive data, transform data and output data**

## Function declarations

They can be called before being defined in the code.

```
funcName(argument1, argument2); //calling/running/invoking

function funcName(parameter1, parameter2){

}
```

## Function expressions

_Remember expressions produce value. The variable will hold the value produced by the function._
Anonymous function/Function without a name.
They cannot be called before being defined in the code -> Cannot access 'funcName' before initialization.

```
const variableName = function (parameter1, parameter2){

}

variableName(argument1, argument2); //calling/running/invoking
```

## Arrow functions

Implicit return

```
const variableName1 = (parameter1, parameter2) => __;

const variableName2 = parameter => __;

const variableName3 = parameter => {

};
```

## Functions calling other functions

DRY purposes

```
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
```

Assignment/Coding challenge note:

```

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
```

## Arrays

Kind of containers in JavaScript.
Ordered data.

### Ways to create arrays:

1. One way: literal syntax.

```
const friends = ["Mari", "Isa", "Camila", "Luciana"];
console.log(friends[0]);
```

2. Another way: an array function with the new keyword.

```
const years = new Array(1984, 1987, 1948);

```

### Number of elements

```
console.log(years.length);
```

### Index of the last element of the array

```
console.log(years.length - 1);
```

### Add/Replace elements to an array

Replace:

```
friends[0] = "Lia";
console.log(friends);
//["Lia", "Isa", "Camila", "Luciana"] -> Mari was replaced by Lia
```

_Only primitive values are immutable_
_Arrays accept expressions_

```
const alexandre = ["Elaine", "Fátima", 2022 - 1987];
console.log(alexandre);

const age = calcAge(years[years.length - 1]);//last element of the array
console.log(age); //74

let arr = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(arr); //[38, 35, 74]
```

## Array methods

Array operations

### Push

Adds element to the end of the array.

```
let variable = ["element 1", "element 2", "element 3"];
const newLength = variable.push("element 4");
console.log(newLength); //4 -> All of them (push, pop, shift and unshift) return the new length of the array
console.log(variable); //["element 1","element 2","element 3","element 4"]
```

### Unshift

Adds element to the beginning of the array

```
variable.unshift('element 0');
console.log(variable);//["element 0", "element 1","element 2","element 3","element 4"]
```

### Pop

Removes element from the end of the array. It doesn't need an argument.

```
variable.pop();
console.log(variable); //["element 1","element 2","element 3"]
```

### Shift

Removes element from the beginning of the array. It doesn't need an argument.

```
variable.shift();
console.log(variable);//["element 1", "element 2", "element 3"]
```

### IndexOf

Returns the index in which the element is located.

```
console.log(variable.indexOf('element 1'));//0
```

If there is no such element in the array, it returns -1:

```
console.log(variable.indexOf('element 7'));//-1
```

If I wanna **replace an element for another element without knowing its index**:

```
arrName[arrName.indexOf(elementToBeReplaced)] = newElement;
```

if it exists, it will be replaced. If not, nothing will happen.

### Includes

Similar to IndexOf, but it returns a Boolean.

```
console.log(variable.includes("element 7")); //false
console.log(variable.includes("element 3")); //true

if (friends.includes('Camila')){
  console.log('I miss Camila very much');
}
```

It tests for strict equality only:

```
variable.unshift(1);
console.log(variable); //[1, "element 1", "element 2", "element 3"]
console.log(variable.includes("1")); //false
```

## Objects

Object _'obj'_ has two properties (each property has one key:value pair)
Order doesn't matter (unstructured data)

```
const obj = {
  key: "value1", //property 'key1' with the value of 'value1'
  key2: "value2", //property 'key2' with the value of 'value2'
  key3: "value3", //property 'key3' with the value of 'value3'
};
```

### Ways of getting a property from an object

- Dot notation

```
console.log(obj.key1); //value1
```

- Bracket notation

```
console.log(obj["key1"]); //value1
```

Bracket notation accepts expressions
Example:

```
const nameKey = "key"; //repeating part
console.log(obj[nameKey + "1"]); //value1
```

Another example:

```
objName["keyWhichContainsANumberAsValue"] += 2;
//Example:
myCountry["population"] += 2;
//It calculates 'population + 2'
```

Another example:

```
const user = {
  firstName: "Elaine",
  lastName: "Bargiela",
};

const repeatingPart = "Name";
console.log(user["first" + repeatingPart]); //Elaine
```

Prompt:

```
const objName = {
  firstName: "Elaine",
  lastName: "Bargiela",
};

const promptVariable = prompt("firstName or lastName?");
console.log(objName[promptVariable]); //my object's name[user's answer, the key] -> the answer grabs the corresponding value property
```

If there's no such property, we get undefined.

```
if (objName[promptVariable]) {
  console.log(objName[promptVariable]); //if the user inserts the right key
} else {
  console.log("There's no such key here"); //if the user inserts sth is not in the object
}
```

### Ways to add new properties to the objects

```
obj.key4 = "value4";
obj["key5"] = ["arrayValue1", "arrayValue2", "arrayValue3"];
console.log(obj); //Object { key1: "value1", key2: "value2", key3: "value3", key4: "value4", key5: Array(3)[("arrayValue1", "arrayValue2", "arrayValue3")];
```

To grab the length of a property:

```
console.log(obj.key5.length); //3
```

## Object Methods

Only function expression:

```
const objName = {
  key: "value",
  funcName: function(parameter){

  },
  };

  console.log(objName.funcName(argument));
  console.log(objName['funcName'](argument));
```

'This' keyword:

```
const user = {
firstName: "Alexandre",
birthYear: 1987,
funcName: function(){
  return 2022-this.birthYear;
}
};

console.log(user.funcName());//35
```

If you need to repeat the age multiple times, it's best practice to **store it in a variable**, like this:

```
const user1 = {
  firstName: "Alexandre",
  birthYear: 1987,
  funcName: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(user1.funcName()); //35 --> without this line, next lines don't work (we have to call it, otherwise we get undefined)
console.log(user1.age); //35
console.log(user1.age); //35
```

Assignment/Coding challenge note:

```
const obj = {
  newMethod: function () {
    //This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are.
    return (this.isIsland = this.neighbours.length === 0 ? true : false); //new property -> island
  },
};
```

## For loop

Keeps running while condition is true

```
for (let i = 2; i <= 6; i++) {
  // i++ = i = i + 1
  // from 2 to 6
  console.log(`loop ${i}`);
  //loop 2, loop 3, loop 4, loop 5, loop 6
}
```

### Loop through arrays

```
const years = new Array(1984, 1987, 1948);

//Loop through an array and return in an array
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages); //[38, 35, 74]

//Loop through an array and return without array
for (let i = 0; i < years.length; i++) {
  console.log(2022 - years[i]); //38, 35, 74
}
```

```
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

  types[i] = typeof array[i];
  //filling types array.
  //Same as -> types.push(typeof array[i]);
}
console.log(types);
//Array(4) [ "string", "string", "string", "object" ]
```

Assignment/Coding challenge note:
_Remember the return shall stay outside of the loop_

```
function funcName (parameter) {
  let sum = 0;
  for (let i = 0; i < parameter.length; i++) {
    sum += parameter[i];
  }
  return sum / parameter.length;
}
```

### continue

(same as skip) access the current iteration of the loop and continue to the next one:

```

const ar = [true, "one", "two", 1, 2];
for (let i = 0; i < ar.length; i++) {
  if (typeof ar[i] !== "string") continue;
  //same as saying: skip the others, I just want strings
  console.log(ar[i], typeof ar[i]); //one string, two string
}
```

### break

completely terminates the whole loop

```
for (let i = 0; i < ar.length; i++) {
  if (typeof ar[i] === "number") break;
  //same as saying: stop when you find a number
  console.log(ar[i], typeof ar[i]); //true boolean, one string, two string
}
```

### Loop backwards

In the example below, from index 3 to index 0:

```
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
```

### Loop inside of a loop

```

//Loop inside of a loop
for (let dci = 1; dci < 6; dci++) {
  console.log(`----> DCI course - Day ${dci} of the week`);

  for (let c = 1; c < 4; c++) {
    console.log(`Classes ${c}`);
  }
}

* Output:
----> DCI course - Day 1 of the week
Classes 1
Classes 2
Classes 3
----> DCI course - Day 2 of the week
Classes 1
Classes 2
Classes 3
----> DCI course - Day 3 of the week
Classes 1
Classes 2
Classes 3
----> DCI course - Day 4 of the week
Classes 1
Classes 2
Classes 3
----> DCI course - Day 5 of the week
Classes 1
Classes 2
Classes 3
```

Assignment/Coding challenge note:

```
const outer = [
  ["Zero index 0", "Zero index 1"],
  ["One index 0"],
  ["Two index 0", "Two index 1", "Two index 2"],
];

for (let i = 0; i < outer.length; i++) {
  console.log(`First/Outer -> index ${[i]}`);
    //[i] is the first array of 3 arrays
  for (let y = 0; y < outer[i].length; y++) {
    console.log(` -> ${outer[i][y]}`);
    //[i][y] is the inner iteration
    //that is, -> 0, 1
    //then -> 0
    //then -> 0, 1, 2
  }
}

* Output:
First/Outer -> index 0
 -> Zero index 0
 -> Zero index 1
First/Outer -> index 1
 -> One index 0
First/Outer -> index 2
 -> Two index 0
 -> Two index 1
 -> Two index 2

```

### While loop

We don't need a counter (while loop is more versatile). **We don't know beforehand how many iterations the loop will have.**
We can only specify the condition
All it needs is the condition to be true to continue running

```
//FOR LOOP
for (let i = 2; i <= 6; i++) {
  console.log(`loop ${i}`);
}
//WHILE LOOP
let i = 2; //in the beginning: counter/repetitions
while (i <= 6) {
  //it will run while this condition is true
  console.log(`While loop ${i}`); //code we want to execute
  i++; //we increase the counter at the end
}
```

**Example that doesn't depend on the counter**
Keep running the loop while the dice is different from 6. That is to say it depends on a random variable
We don't know beforehand how many times it should run (no number to be increased)

```
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
//output: random number from 1 to 6

while (dice !== 6) { //as soon as the value is 6, it will stop
  console.log(`You rolled a ${dice}`);
  //without the code below, if I save, the loop will run into an infinite loop because we are creating only one dice value (if different than 6, it will print this, so it will run forever)
  //To keep creating new dice values (and not enter into an infinite loop), we use this:
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

* Output example (example because it is random):
You rolled a 3
You rolled a 2
Loop is about to end...

```

_Math.trunc( ) returns the integer part of a number by removing any fractional digits. Ex: -0.123 becomes -0_
_Math.random( ) returns a random number between 0 (inclusive), and 1 (exclusive)_

Assignment/Coding challenge note:

```

${i + 1} day(s) -> 1 day, 2 days...
```

# JavaScript Basics

## VSCode settings suggestions

Auto Save: onFocusChange
Word Wrap: on
Format On Save: :white_check_mark:

JavaScript
High-level :point_right: we don't have to worry about memory management, for example
Object-oriented :point_right: based on objects for storing most kinds of data
Multi-paradigm :point_right: we can use different styles of programming
(also has dynamic typing - we don't have to manually define the data type of the value stored in a variable. Important: the value has type, not the variable)

React, Angular, Vue :point_right: libraries based on JavaScript

Js and browser are separate things.
Front-end apps :point_right: browser.
Back-end apps :point_right: Node makes it possible to use JavaScript on the server without any browser.

Native mobile applications :point_right: React native, Ionic
Native desktop applications :point_right: eletron

ES6/ES2015 ... ... ES11/ES2020 :point_right: Modern JavaScript
Backwards compatible - Anything removed, just added (new releases).
Not forwards compatible - Current browsers do not understand code from the future. How to use Js with old browsers then? 
During development -> using the latest Google Chrome version.
During production -> transpiling and polyfilling your code using Babel (converting back to ES5 to ensure browser compatibility -> ES5 is considered fully supported in all browsers).

## Link the js file:

Right before the closing `</body>` tag

```
<script src="./index.js"></script>
```

A value is only primitive when is not an object.

## Comments in Js

One line: `//`
Multi-lines: `/* */`

## Data Types

**Number**
**String**
**Boolean**
**Undefined** :point_right: not yet defined, just an empty value (empty variable, for example), the variable does not exist
console.log(2 + undefined);//NaN
**Null** :point_right: also empty value, intentional absence of value, the variable is empty
console.log(2 + null); //2
console.log(typeof null); //object :point_right: it's a bug in JavaScript
**Symbol** ES2015
**BigInt** ES2020

### Typeof operator

The typeof operator returns a string indicating the type of the operand's value.

### Assignment operators
````
let x = 15;
x+=10; //x=x+10 = 25
x++; //x=x+1
console.log(x++); //25
console.log(x); //26
````
### Comparison operators
`>, <, >=, <=`

### Multiple lines 
````
console.log(`Multiple
lines
string`);
````
### Type Conversion
Manually
````
let age = '18'; // -> string
console.log(age + 1); //181
console.log(Number(age)+1); //19
let num = String(0);
console.log(typeof num); //string

NaN is just an invalid number
console.log(typeof NaN); //number
````

### Type Coercion 
JavaScript
**Addition -> string**
Whenever there is an operation between a string and a number, the number will be converted into string.
````
console.log('I am ' + 38 + ' years old');
````
**Subtraction, division and multiplication -> number** 
Subtraction/Minus, division and multiplication operators convert strings into numbers
`````
console.log('100' - '20' - 5); //75
`````
### Falsy values
Not false initially, but they become falsy when we try to convert them into a boolean 
0, '', undefined, null, NaN
`````
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

console.log(Boolean("Elaine")); //true
console.log(Boolean({})); //true
`````
Undefined is a falsy value, therefore, we have "It's undefined" in the console:
````
let age;
if (age) {
  console.log("Now I know your age");
} else {
  console.log("Age is UNDEFINED");
}
````
We can run into problems if variable is set to 0 also, because 0 is also a falsy value, although we didn't expect that input.

### One-line if
One line, no need for curly braces.
````
const age = 18;
if (age === 18) console.log("You've just became an adult");
````

## Strict equality operator === 
Type and value, it does not perform type coercion.
ALWAYS PREFER STRICT EQUALITY
## Loose equality operator ==
Just value.

## Prompt
````
const celebration = prompt("Gimme 10 to celebrate"); 
````
The number I added in the prompt is shown when I console log celebration. 

````
console.log(celebration); //10
````
It is a string, not a number, (and it returns null if I don't add anything). If I want it to be a number, I shouldn't use loose equality operator, instead I should use the Number() method.

`````
const celebration = Number(prompt("Gimme 10 to celebrate"));
console.log(typeof celebration); //number
`````

## Switch statement

`````
const day = 'Monday';

switch (day){
    case 'Monday': //Strict equality. Same as saying: 'if the day is equal to Monday, do that'. 
    console.log('_');
    break; // For example, without this 'break', the input of Monday and Tuesday would be printed.
    case 'Tuesday':
    console.log('_');
    break;
    case 'Wednesday':
    case 'Thursday'
    console.log('_');
    break;
    case 'Friday':
    console.log('_');
    break;
    case 'Saturday':
    case 'Sunday':
    console.log('_');
    break;
    default:
    console.log('_');
    break;
}
`````

## Statements x Expressions
Expressions produce value.
Statements just produce actions (print something).

## Ternary Operator
Accepts expressions.
`````
let age4 = 17;
console.log(`I like to drink ${age4>=18?'wine':'water'}.`); //I like to drink water.
`````

````
console.log(country); //Brazil
console.log(population); //216000000
console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);
`````
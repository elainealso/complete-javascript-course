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

## Arrays

Kind of containers in JavaScript.

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

### Add elements to an array

```
friends[0] = "Lia";
console.log(friends); //["Lia", "Isa", "Camila", "Luciana"]
```

_Only primitive values are immutable_
_Arrays accept expressions_

```
const alexandre = ["Elaine", "Fátima", 2022 - 1987];
console.log(alexandre);

const age = calcAge(years[years.length - 1]);//last element of the array
console.log(age); //74
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

### Includes

Similar to IndexOf, but it returns a Boolean.

```
console.log(variable.includes("element 7")); //false
console.log(variable.includes("element 3")); //true

if (friends.includes('Camila')){
  console.log('I miss Camila very much');
}
```

Tests for strict equality only:

```
variable.unshift(1);
console.log(variable); //[1, "element 1", "element 2", "element 3"]
console.log(variable.includes("1")); //false
```

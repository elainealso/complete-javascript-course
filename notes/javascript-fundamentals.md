## Strict mode 
Using strict mode in the beginning of the js file helps us to avoid certain errors:
````
'use strict';
````
It also reserves words that may be implemented in the future.

## Function declarations
They can be called before being defined in the code.
```
funcName(argument1, argument2); //calling/running/invoking

function funcName(parameter1, parameter2){

}
```
## Function expressions 
*Remember expressions produce value. The variable will hold the value produced by the function.*
Anonymous function/Function without a name.
They cannot be called before being defined in the code -> Cannot access 'funcName' before initialization.
````
const variableName = function (parameter1, parameter2){

}

variableName(argument1, argument2); //calling/running/invoking
````
## Arrow functions

Implicit return

````
const variableName1 = (parameter1, parameter2) => __;

const variableName2 = parameter => __;

const variableName3 = parameter => {
    
};
````


// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
function calc(arr) {
  let max = [];
  let min = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] !== "number") continue;
    let newMax = max.push(Math.max(temperatures));
    let newMin = min.push(Math.min(temperatures));
  }
  return newMax, newMin;
}
console.log(calc(temperatures));







/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
function calc(arr) {
  let max = []; // what if the maximum is less than zero?
  let min = []; // what if the minimum is greater than zero?
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] !== "number") continue; // good!
    // .push() is an Array method. What type of data is 0?
    const maax = max.push(Math.max(temperatures));
    // Math.max() expects more than one number argument. If you
    // only give one number at a time, then that number will, by
    // definition be the maximum number that you give.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    const miin = min.push(Math.min(temperatures));
    // Math.min() expects the same arguments as .max()
  }
  // Output — ReferenceError: maax is not defined
  return maax, miin; // max and min _are_ defined. But maax and miin?
}
console.log(calc(temperatures));

// Here's how you could do this with the spread operator
function calc(arr) {
  arr = arr.filter((number) => !isNaN(number));
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}
const extremes = calc(temperatures);
console.log("extremes:", extremes);



//!REVER COM PROFESSOR
console.log("--------------------- REVER -----------------------");
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcAmp(arr) {
  let max = arr[0]; //starting point -> first element of the array
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp; //if the current value (current position) is greater than the current maximum value, the max value should become this value
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
}
//calcAmp([3, 7, 4, 23]); -> is 3 greater than 3? No, nothing happens. Is 7 greater than 3? Yes, so max = 7. Is 7 greater than 4? Yes... ...

const amplitude = calcAmp(temperatures);
console.log(amplitude); //23

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps); //[ 3, 5, 1, 9, 0, 5 ]

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log("max and min ->", max, min); //9 0
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log("amplitude ->", amplitudeNew); //9

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:

//[17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}ºC in ${i + 1} days`);
  }
}

// Data 1: [17, 21, 23]
// Data 2: [12, 5, -5, 0, 4]
//loop inside of a loop to print amount of days equivalent to arr.length

printForecast([12, 5, -5, 0, 4]);

// my result
// ... 17ºC in 0 days 
// ... 21ºC in 1 days 
// ... 23ºC in 2 days


const print = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("... " + str);
};
print([12, 5, -5, 0, 4]);


*/

// alert("Hello World!");

// console.log("Hello World!");


// ******************** VARIABLES - DECLARATION AND INITIALIZATION ****************

let randomNumber;
randomNumber = 15;

let myName = "Martin";
let secondName = "Angela";
let someSentence = "Hello! I am learning JS!";

let number1 = 5;
let number2 = 10;

let notDefined;

let isRaining = false;
let nullValue = null;

console.log(secondName);
console.log(myName);
console.log(number1);
console.log(someSentence);
console.log(notDefined  );

console.log("------------------------------------------------");
// ********************************* VARIABLE TYPES *********************************

console.log(typeof randomNumber);
console.log(typeof myName);
console.log(typeof isRaining);
console.log(typeof notDefined);
console.log(typeof nullValue);


// Cannot declare a variable name by using keyword from the language itself
// let break = "test"; 

console.log("------------------------------------------------");
// *************************** ARITHMETIC OPERATORS **********************************


// BAD PRACTISE
// console.log(3 + 2);


let num1 = 50;
let num2 = 25;
let num3 = 25.5;

let addition = num1 + num2;
console.log(addition);

let subtraction = num2 - num3;
console.log(subtraction);

let multiplication = num2 * num3;
console.log(multiplication);

let division = num1 / num2;
console.log(division);

let remainder1 = num1 % num2;
console.log("Remainder 1 ", remainder1);

let remainder2 = num1 % num3;
console.log("Remainder 2 ", remainder2);

let a = 10;
a++;
console.log(a);
a--;
console.log(a);

a += num1;
console.log(a);

let isGreaterThan = num1 > num2;
let isEqualWith = num1 == num2;
console.log(isGreaterThan);
console.log(isEqualWith);

console.log("------------------------------------------------");



let feet = 5;
let meters = 0.3048;

let resultFeet = feet * meters;
let resultMeters = meters / feet;
console.log(resultFeet);
console.log(resultMeters);


console.log("------------------------------------------------");
// Class exercise #1

let feetValue = 328;
let conversionRate = 0.3048;
let metersValue = 100;

let feetToMeter = feetValue * conversionRate;
let metersToFeet = metersValue / conversionRate

console.log("Feet to meter ", feetToMeter);
console.log("Meters to feet ", metersToFeet);

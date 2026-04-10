console.log("-- Variable --");

// String (text) ""
let firstName = "Samantha";
// numerical variables
let myAge = 99;
// boolean (true/false)
let isStudent = false;
let isProfessor = true;
// display the values
console.log(firstName);
console.log(myAge);
console.log(isStudent);
console.log(isProfessor);

// Mini challenge:
// last name
let lastName = "Smith";
// height
let height = 71;
// display 
console.log(lastName);
console.log(height + " in");

// Arithmetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1/num2;

//console.log(num1 + " + " + num2 + " = " + sum); //30
console.log(`${num1} + ${num2} = ${sum}`); //string inerpolation
console.log(`${num1} - ${num2} = ${sub}`);
console.log(`${num1} x ${num2} = ${mult}`);
console.log(`${num1} / ${num2} = ${div}`);

//Challenge 1:
// What is the area of a circle with a radius of 3cm?

let pi = 3.1416;
let rad = 3;
let area = pi * rad ** 2;

console.log(area);
console.log(`The area of the circle is ${area}.`);
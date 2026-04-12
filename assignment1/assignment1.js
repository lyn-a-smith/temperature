// Constants

const bar = "==================================";
const title = "DAILY WEATHER REPORT";
const degree = "\u{b0}C";

// Variables
let city = "San Diego";
let temp = 32;
let cond = "Sunny and humid"
let recommend = "Drink water and wear sunscreen"

console.log("Report 1");
console.log(" ");
console.log(bar);
console.log(title);
console.log(bar);
console.log(`City: ${city}`);
console.log(`Temperature: ${temp + degree}`);
console.log(`Condition: ${cond}`);
console.log(`Recommendation: ${recommend}`);
console.log(bar);
console.log(" ")

// variable changes
city = "Chicago";
temp = -5;
cond = "Heavy snow"
recommend = "Bundle up and stay indoors if passible"

console.log("Report 2");
console.log(" ");
console.log(bar);
console.log(title);
console.log(bar);
console.log(`City: ${city}`);
console.log(`Temperature: ${temp + degree}`);
console.log(`Condition: ${cond}`);
console.log(`Recommendation: ${recommend}`);
console.log(bar);
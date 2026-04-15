console.log("Conditionals");

let result = 90;

if(result > 80){
    console.log("You passed the exam");
}

let result2 = 90;
if(result == result2){
    console.log("The values are the same");
}

// case 1: 5 == 5 // true
// case 2: 5 == "5" // true ; checks the value
// case 3: 5 === "5" // error; checks the value and the type

// if-else statement condition (y/n)
// if(condition){
// code to be run if the condition is TRUE
//}else{
// code to be run if the condition is FALSE
//}

let points = 30;

if(points > 60){
    console.log("You won!");
}else{
    console.log("You lose!");
}

let waterTemp = 95;
if(waterTemp > 100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}

// else-if condition
// if(condition){
// code to be run if the condition is TRUE
//}else if(condition2){
// code to be run if the condition2 is TRUE
//}else{
// code to be run if the conditions are FALSE
//}

let age=300;

if(age < 13){
    console.log("You are a child");
}else if(age < 21){
    console.log("You are a teenager");
}else if(age < 64){
    console.log("You are an adult");
}else{
    console.log("You are a senior");
}

let trafficLightColor = "red";

if(trafficLightColor == "red"){
    console.log("Stop!");
}else if(trafficLightColor == "yellow"){
    console.log("Slow Down");
}else if(trafficLightColor == "green"){
    console.log("Go!");
}else{
    console.log("incorrect input");
}

// Challenge 2:

let user = "guest";

if(user == "Admin"){
    console.log("Full access");
    console.log("Welcome Admin");
}else if(user == "Editor"){
    console.log("Access, but limited actions");
    console.log("Welcome Editor");
}else{
    console.log("You don't have access");
    console.log("Error!");
}

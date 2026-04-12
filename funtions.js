// Functions
console.log("Functions");

// 1. declaration (creation)
function sayHello(){
    console.log("Hello cohort 67")
}

// 2. call/trigger/run/execute/use
sayHello()

// Example 2. Fn with 1 parameter
function greetBird(birdName){
    document.getElementById ("birds").innerHTML += "<li> Hello " + birdName + "</li>";
}

greetBird("Terence");
greetBird("Matilda");
greetBird("Chuck");

// Example 3. Fn with 2 parameters

function greetPlayer(firstName,lastName){
    document.getElementById("players").innerHTML += `<p> <b> ${firstName} </b> ${lastName} </p>`
}

greetPlayer("Dashana","Ediriweera");
greetPlayer("Lyn","Smith");

// Challenge 1:

//function doubleScore(score){
//console.log(score*2)
//}

//doubleScore(30);
//doubleScore(4);
//doubleScore(5);

function doubleScore(score){
    let total = score *2;
    console.log(total);// console
    document.getElementById("results").innerHTML+=`<p> score = ${total} </p>`;//html
}

doubleScore(4); // 8
doubleScore(2); // 4
doubleScore(6); // 12
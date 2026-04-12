// constants
const city = "Yuma"
// step 1. create a fn that gets C and converts to F
function celciusToFahrenheit(celcius){
    return (celcius * 9/5 + 32).toFixed(1);
}

// step 2. create a var for each day with the C
let mondayC = 24;
let tuesdayC = 26;
let wednesdayC = 29;
let thursdayC = 31;
let fridayC = 28;

// step 3. Call the fn for calculating F
let mondayF = celciusToFahrenheit(mondayC);
let tuesdayF = celciusToFahrenheit(tuesdayC);
let wednesdayF = celciusToFahrenheit(wednesdayC);
let thursdayF = celciusToFahrenheit(thursdayC);
let fridayF = celciusToFahrenheit(fridayC);

// step 4. Create the output for the HTML
let output = "";
output += `<p> ${city} </p>`;
output += `<p> Monday : -- ${mondayC} °C -> ${mondayF} °F`;
output += `<p> Tuesday : -- ${tuesdayC} °C -> ${tuesdayF} °F`;
output += `<p> Wednesday : -- ${wednesdayC} °C -> ${wednesdayF} °F`;
output += `<p> Thursday : -- ${thursdayC} °C -> ${thursdayF} °F`;
output += `<p> Friday : -- ${fridayC} °C -> ${fridayF} °F`;

document.getElementById("forecast").innerHTML = output;


// step 1. ask the user the information
let temperature = prompt("Enter the temperature");
temperature = parseFloat(temperature);

let scale = prompt("Is it Celsius or Fahrenheit? Type C or F: ");
scale = scale.toLocaleLowerCase();

// step 2. create a function that converts the temp (if)
function convertTemperature(scale, temperature){
    if(scale == "c"){
        return (temperature * 9/5 + 32).toFixed(1);
       
    }else if(scale == "f"){
        return ((temperature - 32) * 5/9).toFixed(1);

    }else{
        console.log("invalid entry");
    }
}

// Step 3. call the function
let result = convertTemperature(scale, temperature);
let numericResult = parseFloat(result);

// Determine the output scale label
let newScale = (scale === "c") ? "F" : "C";

// Step 4. Change color based on thresholds
let resultsDiv = document.getElementById("results");

// Clear previous colors so they don't stack
resultsDiv.classList.remove("blue", "green", "red");

// if (newScale === "C") {
//     // Celsius Logic
//     if (numericResult < 10) {
//         resultsDiv.classList.add("blue");
//     } else if (numericResult >= 10 && numericResult <= 25) {
//         resultsDiv.classList.add("green");
//     } else {
//         resultsDiv.classList.add("red");
//     }
// } else {
//     // Fahrenheit Logic
//     if (numericResult < 50) {
//         resultsDiv.classList.add("blue");
//     } else if (numericResult >= 50 && numericResult <= 77) {
//         resultsDiv.classList.add("green");
//     } else {
//         resultsDiv.classList.add("red");
//     }
// }

///////  ^ USED A DIFFERENT APPRAOCH FOR THIS, BUT WANTED TO KEEP FOR REFERENCE ^

// Step 5. display the results
resultsDiv.innerHTML = `<p>Your converted temperature is: <span id="temp-output">${result}°${newScale}</span></p>`;

// Step 6. Update Thermometer Visual
let mercury = document.getElementById("mercury");
let bulb = document.querySelector(".thermometer-bulb");



// We need a Celsius value for a consistent scale
let tempForGraphic = (newScale === "C") ? numericResult : (numericResult - 32) * 5/9;

// Calculate fill percentage (assuming a range of -20°C to 50°C)
let minTemp = -20;
let maxTemp = 50;
let percentage = ((tempForGraphic - minTemp) / (maxTemp - minTemp)) * 100;

// Keep percentage between 0 and 100
percentage = Math.max(0, Math.min(100, percentage));

// Apply height
mercury.style.height = percentage + "%";

// Apply color based on ranges
let color = "";
if (tempForGraphic < 10) {
    color = "blue";
} else if (tempForGraphic <= 25) {
    color = "green";
} else {
    color = "red";
}

let adviceDiv = document.getElementById("advice");
let message = "";

if (tempForGraphic < 10) {
    message = "🧤 It's chilly! Bundle up in layers and keep a warm drink handy.";
} else if (tempForGraphic <= 25) {
    message = "☀️ Beautiful day! Perfect for a walk or some outdoor exercise.";
} else {
    message = "🔥 Heat warning: Stay hydrated, seek shade, and never leave pets in cars.";
}

// Display the message
adviceDiv.innerText = message;


adviceDiv.style.borderLeft = `5px solid ${color}`;

document.getElementById("temp-output").style.color = color;

mercury.style.backgroundColor = color;
bulb.style.backgroundColor = color;
// constants
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Step 1 - select the scale
let scale = prompt("Please enter C or F?");
scale = scale.toUpperCase();
let oppositeScale = scale === "C" ? "F" : "C";

// Step 2 - create the fn to convert 
function convertTemperature(scale, temperature){
    if(scale === "C"){
        return (temperature * 9/5 + 32).toFixed(1);
    } else if(scale === "F"){
        return ((temperature - 32) * 5/9).toFixed(1);
    } else {
        return "Invalid entry";
    }
}

// Step 3 - declare the variables and arrays
let temperatures = [];
let converted = [];
let total = 0;
let hottestTemp = null;
let hottestDay = "";
let coldestTemp = null;
let coldestDay = "";

// First Loop: Collect Data and do math
for (let i = 0; i < 7; i++){
    let temp = parseFloat(prompt("Enter the temp for " + days[i] + " in " + scale));
    temperatures.push(temp);
    
    let convertTemp = convertTemperature(scale, temp);
    converted.push(convertTemp);

    total += temp;

    if (hottestTemp === null || temp > hottestTemp) {
        hottestTemp = temp;
        hottestDay = days[i];
    }

    if (coldestTemp === null || temp < coldestTemp) {
        coldestTemp = temp;
        coldestDay = days[i];
    }
}

// Calculate the average after the loop finishes
let average = (total / 7).toFixed(1);

// Convert stats to the opposite scale
let averageOpposite = convertTemperature(scale, parseFloat(average));
let hottestOpposite = convertTemperature(scale, hottestTemp);
let coldestOpposite = convertTemperature(scale, coldestTemp);

// Second Loop: Build HTML Output
let htmlContent = "<ul>";

for (let i = 0; i < 7; i++) {
    let currentTemp = temperatures[i];
    let currentConverted = converted[i];
    let label = "";

    if (scale === "C") {
        if (currentTemp > 25) label = "Hot";
        else if (currentTemp >= 10) label = "Comfortable";
        else label = "Cold";
    } else {
        if (currentTemp > 77) label = "Hot";
        else if (currentTemp >= 50) label = "Comfortable";
        else label = "Cold";
    }

    // Wrapped the parts in spans so CSS Grid can align them
    htmlContent += `<li>
        <span class="day-name"><strong>${days[i]}</strong></span>
        <span class="temp-values">${currentTemp}°${scale} (${currentConverted}°${oppositeScale})</span> 
        <span class="label ${label.toLowerCase()}">${label}</span>
    </li>`;
}

htmlContent += "</ul>";

// Add the extra challenge statistics with BOTH C and F
htmlContent += `<div class="stats">
    <p><strong>Weekly Average:</strong> ${average}°${scale} (${averageOpposite}°${oppositeScale})</p>
    <p><strong>Hottest Day:</strong> ${hottestDay} - ${hottestTemp}°${scale} (${hottestOpposite}°${oppositeScale})</p>
    <p><strong>Coldest Day:</strong> ${coldestDay} - ${coldestTemp}°${scale} (${coldestOpposite}°${oppositeScale})</p>
</div>`;

document.getElementById("report").innerHTML = htmlContent;
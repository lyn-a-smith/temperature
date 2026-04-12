function celciusToFahrenheit(celcius) {
    return (celcius * 9/5 + 32).toFixed(1);
}

// An array of objects containing the daily data 
const weatherData = [
    { day: "Monday", tempC: 24, status: "Sunny" },
    { day: "Tuesday", tempC: 26, status: "Partly-cloudy" },
    { day: "Wednesday", tempC: 29, status: "Rainy" },
    { day: "Thursday", tempC: 31, status: "Cloudy" },
    { day: "Friday", tempC: 28, status: "Sunny" }
];

const iconMap = {
    "Sunny": "☀️",
    "Partly-cloudy": "⛅",
    "Rainy": "🌧️",
    "Cloudy": "☁️"
};

// Step 3: Generate the HTML
let output = "";

// Loop through each object in the array
weatherData.forEach(item => {
    // Calculate the Fahrenheit for the current day
    let tempF = celciusToFahrenheit(item.tempC);

    const icon = iconMap[item.status];
    
    output += `
        <div class="forecast-row">
            <span class="day">${item.day}</span>
            <span class="celsius">${item.tempC}°C</span>
            <span class="arrow">→</span>
            <span class="fahrenheit">${tempF}°F</span>
            <span class="badge ${item.status}">${icon} ${item.status.replace('-', ' ')}</span>
        </div>
    `;
});


document.getElementById("forecast-container").innerHTML = output;
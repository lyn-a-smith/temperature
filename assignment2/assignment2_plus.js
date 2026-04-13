function celciusToFahrenheit(celcius) {
    return (celcius * 9/5 + 32).toFixed(1);
}

// An array of objects containing the daily data 
const allWeatherData = {
    "Yuma, AZ": [
        { day: "Monday", tempC: 24, status: "Sunny" },
        { day: "Tuesday", tempC: 26, status: "Partly-cloudy" },
        { day: "Wednesday", tempC: 29, status: "Rainy" },
        { day: "Thursday", tempC: 31, status: "Cloudy" },
        { day: "Friday", tempC: 28, status: "Sunny" }
    ],
    "San Diego, CA": [
        { day: "Monday", tempC: 20, status: "Cloudy" },
        { day: "Tuesday", tempC: 21, status: "Sunny" },
        { day: "Wednesday", tempC: 19, status: "Partly-cloudy" },
        { day: "Thursday", tempC: 18, status: "Rainy" },
        { day: "Friday", tempC: 22, status: "Sunny" }
    ],
    "Phoenix, AZ": [
        { day: "Monday", tempC: 35, status: "Sunny" },
        { day: "Tuesday", tempC: 37, status: "Sunny" },
        { day: "Wednesday", tempC: 34, status: "Cloudy" },
        { day: "Thursday", tempC: 32, status: "Partly-cloudy" },
        { day: "Friday", tempC: 36, status: "Sunny" }
    ]
};

const iconMap = {
    "Sunny": "☀️",
    "Partly-cloudy": "⛅",
    "Rainy": "🌧️",
    "Cloudy": "☁️"
};

// Function to display forecast for each location
function displayForecast(location) {
    // Update the location text
    // document.getElementById("current-location").innerHTML = location;
    // Removed... seemed redundant with dropdown

    // Get the data array for the selected city
    const data = allWeatherData[location];
    let output = "";

    // Loop through the data array
    data.forEach(item => {
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
}

// EVent listener
document.getElementById("location-selector").addEventListener("change", (event) => {
    displayForecast(event.target.value); // Pass the selected value (e.g., "San Diego, CA")
});

// Initial display
displayForecast("Yuma, AZ");
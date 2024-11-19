const temp1 = document.getElementById('temp1');
const temp2 = document.getElementById('temp2');
const temp3 = document.getElementById('temp3');

async function getWeather(lat, lon, element) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        element.textContent = `Temperature: ${data.current_weather.temperature}°C`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        element.textContent = "Error loading temperature";
    }
}

function updateWeather() {
    getWeather(40.7128, -74.0060, temp1);
    getWeather(34.0522, -118.2437, temp2);
    getWeather(51.5074, -0.1278, temp3);
    setTimeout(updateWeather, 10000);
}

updateWeather();

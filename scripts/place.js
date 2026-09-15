// Set footer year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;

// Function to calculate wind chill in Celsius (Metric formula)
function calculateWindChill(temp, windSpeed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16))).toFixed(1);
}

// Static values for temperature and wind speed matching the HTML content
const currentTemp = 10;       // 10 °C
const currentWindSpeed = 10;  // 10 km/h

const windChillElement = document.getElementById('windchill');

// Viable condition for metric: temperature <= 10 °C and wind speed > 4.8 km/h
if (currentTemp <= 10 && currentWindSpeed > 4.8) {
    const windChill = calculateWindChill(currentTemp, currentWindSpeed);
    windChillElement.textContent = `${windChill} °C`;
} else {
    windChillElement.textContent = 'N/A';
}

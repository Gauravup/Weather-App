
async function myfun() {
    const apiKey = '2d9b3d00b9cc62425af7aec51694bf45'; // Replace with your OpenWeatherMap API key
    const inputElement = document.getElementById('input');
    const input = inputElement.value; // Get the input value
    const weatherElement = document.getElementById('weather');
    const p = document.getElementById('p');

    if (input === '') {
        weatherElement.innerText = 'Please enter an area';
        return;
    }
    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Area not found');
        }
        const data = await response.json();
        const temp = Math.round(data.main.temp); // Round the temperature to the nearest integer
        const description = data.weather[0].description;

        // Display the weather data
        weatherElement.innerText = `Temperature: ${temp}°C, ${description.charAt(0).toUpperCase() + description.slice(1)}`;
        
    } catch (error) {
        weatherElement.innerText = error.message;
    } finally {
       
    }
    inputElement.value = '';
}

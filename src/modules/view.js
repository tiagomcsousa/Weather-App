const ViewManager = (() => {

    const cityBtn = document.getElementById('city-search-btn');
    const city = document.getElementById('city');

    function createDisplayContainer() {
        const display = document.getElementById('city-weather-display');

        display.textContent = '';

        const displayContainer = document.createElement('div');
        displayContainer.classList.add('display-container');
        display.appendChild(displayContainer);
    }


    function displayDetails(data) {

        const displayContainer = document.querySelector('.display-container');

        const cityName = document.createElement('h1');
        cityName.style.fontWeight = "bolder";
        cityName.textContent = `${data.name}` + ", " + `${data.country}`;

        const temperature = document.createElement('h1');
        temperature.textContent = Math.round(`${data.temperature}`) + "°C";

        const iconWeather = document.createElement('img');
        iconWeather.src = `http://openweathermap.org/img/wn/${data.weatherIcon}.png`;

        const description = document.createElement('h2');
        description.textContent = `${data.description}`;

        const detailedDescription = document.createElement('h3');
        detailedDescription.textContent = "(" + `${data.detailedDescription}` + ")";

        const minTemp = document.createElement('h5');
        minTemp.textContent = "Min: " + Math.round(`${data.tempMin}`) + "°C";
        const maxTemp = document.createElement('h5');
        maxTemp.textContent = "Max: " + Math.round(`${data.tempMax}`) + "°C";

        displayContainer.appendChild(cityName);
        displayContainer.appendChild(temperature);
        displayContainer.appendChild(iconWeather);
        displayContainer.appendChild(description);
        displayContainer.appendChild(detailedDescription);
        displayContainer.appendChild(minTemp);
        displayContainer.appendChild(maxTemp);
    }

    return { createDisplayContainer, displayDetails };
})();

export default ViewManager
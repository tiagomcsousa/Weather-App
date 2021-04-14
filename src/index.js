import processWeather from './modules/weatherApi';
import ViewManager from './modules/view';

const cityBtn = document.getElementById('city-search-btn');
const city = document.getElementById('city');

city.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("city-search-btn").click();
    }
});

cityBtn.addEventListener('click', async() => {
    const data = await processWeather.getWeatherByCity(city.value);

    ViewManager.createDisplayContainer();
    ViewManager.displayDetails(data);
});
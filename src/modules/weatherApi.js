const processWeather = (() => {

    function convertData(data) {
        const {
            name: name,
            sys: { country: country },
            main: { temp: temperature, temp_min: tempMin, temp_max: tempMax },
            weather: { 0: { main: description, description: detailedDescription, icon: weatherIcon } },
        } = data;
        return { name, country, temperature, tempMin, tempMax, description, detailedDescription, weatherIcon };
    }

    async function getWeatherByCity(city) {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=55bccb0c2eef9d76642c37d4edd0bc00`, {
                mode: 'cors' //Cross origin
            });

            if (!response.ok) throw new Error(`City: ${city} not found!`);

            const wheatherCityData = convertData(await response.json());

            return wheatherCityData;

        } catch (error) {
            alert(error);
            return null;
        }
    }
    return { getWeatherByCity };
})();

export default processWeather
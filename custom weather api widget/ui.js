class UI {
    drawUIlocal(data) {
        document.querySelector('#location1').textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector('#coordinates1').textContent = `GPS: ${data.coord.lon}, ${data.coord.lat}`;
        document.querySelector('#temperature1').textContent = `${(Math.floor((data.main.temp - 273.15)*10))/10} ℃, ${data.weather[0].description}`;
        document.querySelector('#feelsLike1').textContent = `Feels like ${(Math.floor((data.main.feels_like - 273.15)*10))/10} ℃`;
        document.querySelector('#humidity1').textContent = `Humidity: ${data.main.humidity}%`;
        document.querySelector('#wind1').textContent = `Wind: ${data.wind.speed} m/sec`
        document.querySelector('#pic1').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        if (Date.now() > data.sys.sunrise*1000 && Date.now() < data.sys.sunset*1000) {
            document.querySelector('#pic1').parentElement.style = "display: flex; justify-content: center; background-color: rgb(225, 225, 225);";
        }
        else document.querySelector('#pic1').parentElement.style = "display: flex; justify-content: center; background-color: rgb(0, 0, 0);";
    }

    drawUIset(data) {
        document.querySelector('#location2').textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector('#coordinates2').textContent = `GPS: ${data.coord.lon}, ${data.coord.lat}`;
        document.querySelector('#temperature2').textContent = `${(Math.floor((data.main.temp - 273.15)*10))/10} ℃, ${data.weather[0].description}`;
        document.querySelector('#feelsLike2').textContent = `Feels like ${(Math.floor((data.main.feels_like - 273.15)*10))/10} ℃`;
        document.querySelector('#humidity2').textContent = `Humidity: ${data.main.humidity}%`;
        document.querySelector('#wind2').textContent = `Wind: ${data.wind.speed} m/sec`
        document.querySelector('#pic2').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        if (Date.now() > data.sys.sunrise*1000 && Date.now() < data.sys.sunset*1000) {
            document.querySelector('#pic2').parentElement.style = "display: flex; justify-content: center; background-color: rgb(225, 225, 225);";
        }
        else document.querySelector('#pic2').parentElement.style = "display: flex; justify-content: center; background-color: rgb(0, 0, 0);";
    }
}

const ui = new UI
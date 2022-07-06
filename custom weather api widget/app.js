const savedCity = localStorage.getItem('city')
window.addEventListener('load', setFromLS);

class Weather {
    constructor() {
        this.api_key = '5c164962ce5b597097caf8d53bd68ef6'
    }

    checkErr(res) {
        if (res.length === 0) {
            throw new Error(res.error)
        }
        else return res
    }
    
static checkLocalCoords () {
    return new Promise ((resolve, reject) => {
        function error() {console.log('Error: weather API request failed')}
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(currentPosition) {
            let localCoords = [];
            localCoords.push(currentPosition.coords.longitude)
            localCoords.push(currentPosition.coords.latitude)
            resolve(localCoords)
            reject('error')
        };
        window.navigator.geolocation.getCurrentPosition(success, error, options)
    })
}

async checkSetCoords (city) {
    const coordsResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.api_key}`);
    const coordsResponseData = coordsResponse.json();
    coordsResponseData
    .then(data => this.checkErr(data))
    .then(data => weather.checkSetWeather(data))
    .catch(() => {
        localStorage.clear();
        ui.drawErr('Something went wrong')
        })
    }

async checkLocalWeather(lon, lat) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}`);
    const weatherResponseData = weatherResponse.json();
    weatherResponseData
    .then(data => ui.drawUIlocal(data))
    .catch(err => console.log(err))
    }

async checkSetWeather(city) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=${this.api_key}`);
    const weatherResponseData = weatherResponse.json();
    weatherResponseData
    .then(data => ui.drawUIset(data))
    .catch(err => console.log(err))
    }

}

const weather = new Weather;
Weather.checkLocalCoords().then(function(coords) {
    weather.checkLocalWeather(coords[0], coords[1])
    }
    );

document.querySelector('#setBtn').addEventListener('click', set)
function set (e) {
    e.preventDefault();
    const userText = document.querySelector('#userCity').value
    localStorage.setItem('city', userText)
    weather.checkSetCoords(userText)
}

function setFromLS (e) {
    e.preventDefault();
    weather.checkSetCoords(savedCity)
}
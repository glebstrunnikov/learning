class Weather {
    constructor() {
        this.api_key = '5c164962ce5b597097caf8d53bd68ef6'
    }
    

static checkLocalCoords () {
    return new Promise ((resolve, reject) => {
        function error() {console.log('error')}
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

        function success(currentPosition) {
            let localCoords = [];
            localCoords.push(currentPosition.coords.longitude)
            localCoords.push(currentPosition.coords.latitude)
            resolve(localCoords)
            reject('error')
        }
        window.navigator.geolocation.getCurrentPosition(success, error, options)
    })
}

async checkLocalWeather(lon, lat) {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.api_key}`)
    const weatherResponseData = weatherResponse.json()
    weatherResponseData.then(data => console.log(data)).catch(err => console.log(err))
    }


}

const weather = new Weather;
Weather.checkLocalCoords().then(function(coords) {
    weather.checkLocalWeather(coords[0], coords[1])
    }
    )


// Weather.checkLocalLon().then(function(data) {
//     weather.checkLocalWeather(data, 
//         Weather.checkLocalLat().then(data => data)
//         )
// })







// Weather.checkLocalLat();

// weather.checkLocalWeather(Weather.checkLocalLon().then(data => data), '42.5623552')

// console.log(localLon)
// weather.checkLocalWeather('27.5349504', '42.5623552')
// weather.checkLocalWeather(Weather.checkLocalLon(), Weather.checkLocalLat())


// const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     const crd = pos.coords;
  
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);
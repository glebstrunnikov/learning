// navigator.geolocation.getAccuratePosition = function(successF, errorF, opts)
// {  
//     opts.accuracy = opts.accuracy || (opts.enableHighAccuracy ? 50 : 1000);
//     opts.timeout = opts.timeout || 10;
    

//     var watcher;
//     var bestPosition = {};
//     var initialTimeMS = (new Date()).getTime();
//     var tmpAccuracy = 99999;
   	
//     var mySuccessF = function(position) {
//         //console.log('watchPosition update: ' + $.toJSON(position));
//         console.log('watchPosition update: ' + JSON.stringify(position));
        
// 		// Get the best position out of any of those generated
//     	if (position.coords.accuracy <= tmpAccuracy)
//     	{
//     		tmpAccuracy = position.coords.accuracy;
//     		bestPosition = position;
//     	}
    	
//         if (position.coords.accuracy <= opts.accuracy || ((new Date()).getTime() - initialTimeMS) > opts.timeout)
//         {
        	
//             navigator.geolocation.clearWatch(watcher);
//             successF(bestPosition);
//         }
//     };
//     var myErrorF = function(error) {
//         navigator.geolocation.clearWatch(watcher);     
//         errorF(error);
//     };
//     watcher = navigator.geolocation.watchPosition(mySuccessF, myErrorF, opts);
    
// };





function checkLocalCoords () {
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
            console.log(currentPosition)
            resolve(localCoords)
            reject('error')
        };
        window.navigator.geolocation.getCurrentPosition(success, error, options)
    })
}

// checkLocalCoords().then(res => console.log(res))




const optionsSimple = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function successSimple (pos) {
    console.log(pos)
}

function errorSimple () {console.log('error')
}
navigator.geolocation.getCurrentPosition(successSimple, errorSimple, optionsSimple) 
navigator.geolocation.watchPosition(successSimple, errorSimple, optionsSimple) 






// 27.722694506276344, 42.66120244658556 - my actual position
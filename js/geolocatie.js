 var watchID = null;
 document.addEventListener("deviceready", loaded, false);
             var 
            function loaded() {
               watchID = navigator.geolocation.getCurrentPosition(success, error, { frequency: 3000 });
            }
             
            function success(position) {
                var element = document.getElementById('geolocation');
                element.innerHTML = 'Latitude: ' + position.coords.latitude     + '<br />' +
                'Longitude: '           + position.coords.longitude             + '<br />' +
                'Altitude: '            + position.coords.altitude              + '<br />' +
                'Accuracy: '            + position.coords.accuracy              + '<br />' +
                'Altitude Accuracy: '   + position.coords.altitudeAccuracy      + '<br />' +
                'Heading: '             + position.coords.heading               + '<br />' +
                'Speed: '               + position.coords.speed                 + '<br />' +
                'Timestamp: '           + new Date(position.timestamp)          + '<br />';
            }
             
            function error(error) {
                alert(error.message);
            }
			
			 function stopzoeken(error) {
                navigator.geolocation.clearWatch(watchID);

            }

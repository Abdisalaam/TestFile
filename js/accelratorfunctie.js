  var watchID = null;
             
            
          
             
            // Start watching the acceleration
             
            function startWatch() {
                 
                var previousReading = {
                    x: null,
                    y: null,
                    z: null
                }
                 
              watchID =  navigator.accelerometer.watchAcceleration(function (acceleration) {
                  var changes = {},
                  bound = 0.2;
                  if (previousReading.x !== null) {
                      changes.x = Math.abs(previousReading.x, acceleration.x);
                      changes.y = Math.abs(previousReading.y, acceleration.y);
                      changes.z = Math.abs(previousReading.z, acceleration.z);
                  }
                   
                  if (changes.x > bound && changes.y > bound && changes.z > bound) {
                    shaken();
                  }
                   
                  previousReading = {
                  x: reading.x,
                  y: reading.y,
                  z: reading.z
                  }
                   
                  }, onError, { frequency: 2000 });
            }
             
            function shaken(){
                alert("Shaken");
            }
             
            // Error
            function onError() {
                alert('onError!');
            }
			function stopAccel() {
                alert('onError!');
            }

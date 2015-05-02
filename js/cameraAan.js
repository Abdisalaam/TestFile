$(document).ready(function(){
	  var pictureSource;
        var destinationType;
	document.addEventListener('deviceready', onDeviceReady, false);
	 function onDeviceReady(){
            navigator.camera.getPicture(onSuccess, onFail, {quality:20, destinationType: Camera.DestinationType.FILE_URI
});
            function onSuccess(imageData){
                var image=document.getElementById('popImage');
                image.src='data:image/jpeg;base64,'+imageData;
            }
            function onFail(message){
                alert(message);
            }
    }


   
    });

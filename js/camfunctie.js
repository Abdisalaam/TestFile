
 var pictureSource = navigator.camera.PictureSourceType; 
 var destinationType = navigator.camera.DestinationType;

 function loaded() {
     
    
 }
  
 function getPhoto(imageData) {
     var smallImage = document.getElementById('smallImage');
      
      
     smallImage.style.display = 'block';
      
      
     smallImage.src = "data:image/jpeg;base64," + imageData;
 }
  
 function capturePhoto() {
     navigator.camera.getPicture(getPhoto, onFail, { quality: 50 });
 }
 
  
 function onFail(message) {
     alert('Failed because: ' + message);
 }
             

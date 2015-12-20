angular.module('starter', ['ionic', 'ngCordova'])

.controller("AppController", function ($scope, $cordovaCamera) {
	
	 $scope.items = [ ];

                $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                  $cordovaCamera.getPicture(options).then(function(imagePath){
 
  //Grab the file name of the photo in the temporary directory
  var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
  //Create a new name for the photo
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
 
  //Move the file to permanent storage
  $cordovaFile.moveFile(cordova.file.tempDirectory, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
 
    //success.nativeURL will contain the path to the photo in permanent storage, do whatever you wish with it, e.g:
    createPhoto(success.nativeURL);
	  add.Item(success.nativeURL)
 
  }, function(error){
    //an error occured
  });
 
}, function(error){
  //An error occured
});
                }
                
                $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                 $cordovaCamera.getPicture(options).then(function(imagePath){
 
  //Grab the file name of the photo in the temporary directory
  var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
  //Create a new name for the photo
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
 
  //Move the file to permanent storage
  $cordovaFile.moveFile(cordova.file.tempDirectory, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
 
    //success.nativeURL will contain the path to the photo in permanent storage, do whatever you wish with it, e.g:
   createPhoto(success.nativeURL);
 
  }, function(error){
    //an error occured
  });
 
}, function(error){
  //An error occured
});
                }
                
				
				$scope.captureVideo = function() {
					 var q = $q.defer();
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      // Success! Video data is here
		q.resolve(videoData);
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

            });
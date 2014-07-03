define([], function() {

    var CameraAPI = function(el) {

        var pictureSource=navigator.camera.PictureSourceType,
            destinationType=navigator.camera.DestinationType;

        var onPhotoDataSuccess = function(imageData) {
            el.src = "data:image/jpeg;base64," + imageData;
        };

        var onPhotoURISuccess = function(imageURI) {
            alert(el.src)
            el.src = imageURI;
        };

        var onFail = function (message) {
            alert('Failed because: ' + message);
        };

        this.capturePhoto = function() {
            // Take picture using device camera and retrieve image as base64-encoded string
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                destinationType: destinationType.DATA_URL });
        };

        this.capturePhotoEdit = function() {
            // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                destinationType: destinationType.DATA_URL });
        };

        this.getPhoto = function() {
            // Retrieve image file location from specified source
            navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                destinationType: destinationType.FILE_URI,
                sourceType: pictureSource.SAVEDPHOTOALBUM });
        }
    };

    return CameraAPI;
});
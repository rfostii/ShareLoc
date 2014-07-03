define([], function() {
    var DeviceUtils = {
        reachAbility: function () {
            return !!(navigator.network.connection.type == Connection.NONE || navigator.network.connection.type == Connection.UNKNOWN);
        },

        onBodyLoad: function() {
            document.addEventListener("deviceready", onDeviceReady, false);
        },

        onDeviceReady: function() {
            pictureSource = navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
            if (this.reachAbility()) {
                return false;
                // navigator.notification.alert('No internet connection available',null, '', 'OK');
            }
            return true;
        }
    };

    return DeviceUtils;
});

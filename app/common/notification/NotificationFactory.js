'use strict';

angular.module('TestAngularApp').factory('NotificationFactory', function(toastr) {
	var logIt;
	
	var options = {
    	"closeButton": true,
		"progressBar" : true,
    	"positionClass": "toast-bottom-right",
		"timeOut": "3000"
	};
	
	logIt = function(message, type) {
		return toastr[type](message, options);
	};
	
	return {
		success: function(message) {
			logIt(message, 'success');
		},
		error: function(message) {
			logIt(message, 'error');
		}
	};
});
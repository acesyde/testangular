angular.module('TestAngularApp').service('WeatherService', function($http) {
	return {
    	get: function(params, callback) {
			$http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q='+params).then(callback);
		}
	}
});
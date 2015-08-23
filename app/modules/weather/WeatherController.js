angular.module('TestAngularApp').controller('WeatherController', function($scope, NotificationFactory, WeatherService) {
	var vm = this;
	vm.location = '';
	vm.weatherInformations = '';
	
	vm.onSearchWeather = function() {
		WeatherService.get(vm.location, function(response) {
			if(response !== undefined && response.status == 200) {
				if(response.data.cod != "404") {
					vm.weatherInformations = 'Current temp : ' + response.data.main.temp;
				} else {
					vm.weatherInformations = response.data.message;
				}
			}
		});
	}
});
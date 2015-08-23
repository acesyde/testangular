angular.module('TestAngularApp').controller('HomeController', function($scope, $location, NotificationFactory) {
	var vm = this;
	vm.pageTitle = "This is the page title which is now available in the view";
	vm.pageDescription = "Here is some more data available from the controller in the view.";
	
	vm.onClickHelloWorld = function() {
		NotificationFactory.success('Hello world!');
	}
	
	vm.onClickError = function() {
		NotificationFactory.error('Bye world!');
	}
});
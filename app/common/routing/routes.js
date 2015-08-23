'use strict';

angular.module('TestAngularApp').config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/home', {
            templateUrl: 'app/modules/home/views/index.html',
            controller: 'HomeController'
        })
        .when('/weather', {
            templateUrl: 'app/modules/weather/views/index.html',
            controller: 'WeatherController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
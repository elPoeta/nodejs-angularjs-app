module.exports = require('angular')
                .module('movieApp', [require('angular-route')])
                .config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider){
                    $locationProvider.html5Mode(true).hashPrefix('*');
                   /*  $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                      });
                 */
                    $routeProvider
                    .when('/home', {
                        templateUrl : 'app/views/home.html',
                        controller: 'homeController'
                    })
                 /*   .when('/genre', {
                        templateUrl : 'app/views/genre.html',
                        controller: 'genreController'
                    })
                    .when('/about', {
                        templateUrl : 'app/views/about.html',
                        controller: 'aboutController'
                    }) */
                    .otherwise({
                        redirectTo : '/home'
                    });
                   
                }]);
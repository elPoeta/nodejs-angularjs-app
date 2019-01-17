const app = require('../app');

function homeRoute($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);   
    $stateProvider
           .state('main',
                  {
                      url: '/',
                      templateUrl: './app/views/home.html'

                  })
                  .state('home',
                   {
                      url: '/movieteca/home',
                      templateUrl: './app/views/home.html'
                   }
                  )
                  .state('about',
                        {
                         url: '/movieteca/about',
                         templateUrl: './app/views/about.html',
                         controller: 'aboutController'

                     });

                  $urlRouterProvider.otherwise('/');
        }

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', homeRoute]);

module.exports = app;

                      
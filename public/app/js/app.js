module.exports = require('angular')
                .module('movieApp', [require('angular-route'),require('angular-resource'),require('angular-animate')])
                .config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider){
                    $locationProvider.html5Mode(true).hashPrefix('*');
                   /*  $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                      });
                 */
                    $routeProvider
                    .when('/movieteca/home', {
                        templateUrl : 'app/views/home.html',
                        controller: 'homeController'
                    })
                    .when('/movieteca/genre', {
                        templateUrl : 'app/views/genres.html',
                        controller: 'genreController'
                     /*   resolve: {
                            genres: ['GenreService', function(GenreService) {
                                 return GenreService.fetchAllGenres();
                                            }]
                                  }*/
                    })
                    .when('/movieteca/genre/:id', {
                        templateUrl : 'app/views/genre.html',
                        controller: 'genreController'
                     /*   resolve: {
                            genres: ['GenreService', function(GenreService) {
                                 return GenreService.fetchAllGenres();
                                            }]
                                  }*/
                    })
                    .when('/movieteca/director', {
                        templateUrl : 'app/views/directors.html',
                        controller: 'directorController'
                       /* resolve: {
                            directors: ['DirectorService', function(DirectorService) {
                                 return DirectorService.fetchAllDirectors();
                                            }]
                                  } */
                    })
                    .when('/movieteca/movie', {
                        templateUrl : 'app/views/movies.html',
                        controller: 'movieController',
                    /*    resolve: {
                            movies: ['MovieService', function(MovieService) {
                                 return MovieService.fetchAllMovies();
                                            }]
                                  } */
                    })
                    .when('/movieteca/about', {
                        templateUrl : 'app/views/about.html',
                        controller: 'aboutController'
                    }) 
                    .otherwise({
                        redirectTo : '/movieteca/home'
                    });
                   
                }]);
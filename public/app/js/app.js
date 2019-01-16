module.exports = require('angular')
                .module('movieApp', ['ui.router',require('angular-resource'),require('angular-animate')])
                .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
                       function($stateProvider, $urlRouterProvider, $locationProvider){
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

                                            })
                                            .state('genres',
                                             {
                                                url: '/movieteca/genres',
                                                templateUrl: './app/views/genres.html',
                                                controller: 'genresController',
                                                resolve : {
                                                    genres: ['GenreFactory', function(GenreFactory) {
                                                         return GenreFactory.fetchAllGenres();
                                                                    }]
                                                    }      
                                            })
                                            .state('genres.edit',
                                            {
                                                views: {
                                                    content: {
                                                        url: '/edit',
                                                        templateUrl: './app/views/genres-edit.html',
                                                      //  controller: 'genreEditController'
                                                    }
                                                }
                                            })
                                            .state('directors',
                                            {
                                               url: '/movieteca/directors',
                                               templateUrl: './app/views/directors.html'

                                           })
                                           .state('movies',
                                           {
                                              url: '/movieteca/movies',
                                              templateUrl: './app/views/movies.html'

                                          })
                                            .state('about',
                                             {
                                                url: '/movieteca/about',
                                                templateUrl: './app/views/about.html'

                                            });

                                             $urlRouterProvider.otherwise('/');
                                          }]);
               
               
               
               
               /*
                .config(['$routeProvider', '$locationProvider',function ($routeProvider, $locationProvider){
                    $locationProvider.html5Mode(true).hashPrefix('*');
                     $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                      });
                 
                    $routeProvider
                    .when('/movieteca/home', {
                        templateUrl : 'app/views/home.html',
                        controller: 'homeController'
                    })
                    .when('/movieteca/genre', {
                        templateUrl : 'app/views/genres.html',
                        controller: 'genresController'
                        resolve: {
                            genres: ['GenreService', function(GenreService) {
                                 return GenreService.fetchAllGenres();
                                            }]
                                  }
                    })
                    .when('/movieteca/genre/:id', {
                        templateUrl : 'app/views/genre.html',
                        controller: 'genreController'
                    })
                    .when('/movieteca/genre/:id/edit', {
                        templateUrl : 'app/views/genreEdit.html',
                        controller: 'genreController'
                    })
                    .when('/movieteca/director', {
                        templateUrl : 'app/views/directors.html',
                        controller: 'directorsController'
                        resolve: {
                            directors: ['DirectorService', function(DirectorService) {
                                 return DirectorService.fetchAllDirectors();
                                            }]
                                  } 
                    })
                    .when('/movieteca/director/:id', {
                        templateUrl : 'app/views/director.html',
                        controller: 'directorController'
                    })
                    .when('/movieteca/movie', {
                        templateUrl : 'app/views/movies.html',
                        controller: 'moviesController',
                       resolve: {
                            movies: ['MovieService', function(MovieService) {
                                 return MovieService.fetchAllMovies();
                                            }]
                                  } 
                    })
                    .when('/movieteca/movie/:id', {
                        templateUrl : 'app/views/movie.html',
                        controller: 'movieController',
                    })
                    .when('/movieteca/about', {
                        templateUrl : 'app/views/about.html',
                        controller: 'aboutController'
                    }) 
                    .otherwise({
                        redirectTo : '/movieteca/home'
                    });
                   
                }]);

                */
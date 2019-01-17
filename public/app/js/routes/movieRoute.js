const app = require('../app');

function movieRoute($stateProvider){
    $stateProvider
    .state('movies',
    {
       url: '/movieteca/movies',
       templateUrl: './app/views/movies.html',
       controller: 'moviesController',
       resolve : {
        movies: ['MovieFactory', function(MovieFactory) {
             return MovieFactory.fetchAllMovies();
                        }]
        }      

   })
   .state('oneMovie',
   {
      url: '/movieteca/movie/{id:int}',
      templateUrl: './app/views/movie.html',
      controller: 'movieController',
      resolve: {
         movie : ['$stateParams', 'MovieFactory', function($stateParams, MovieFactory){
            return MovieFactory.fetchOneMovie($stateParams.id);
         }]
      }
   });

}

app.config(['$stateProvider',movieRoute]);

module.exports = app;
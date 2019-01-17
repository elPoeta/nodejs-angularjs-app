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

   });

}

app.config(['$stateProvider',movieRoute]);

module.exports = app;
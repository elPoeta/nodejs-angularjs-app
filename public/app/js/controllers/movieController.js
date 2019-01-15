const app = require('../app');

function moviesController($scope, MovieFactory){
  $scope.title = 'Movie Controller';

  $scope.movies = getMovies();

  function getMovies() {
    let dataMovies = { 
      getMovies: undefined,
      status: undefined
    }
    MovieFactory.getMovies()
        .then(function (response) {
          return  dataMovies.getMovies = response.data.movies;
        }, function (error) {
            return dataMovies.status = 'Unable to load Movies data: ' + error.message;
        });
    return dataMovies;    
}

}


function movieController($scope, $routeParams, MovieFactory){
  $scope.movie = getMovie($routeParams.id);

  function getMovie(id) {
    let dataMovie = { 
      getMovie: undefined,
      status: undefined
    }
    MovieFactory.getMovie(id)
        .then(function (response) {
          return  dataMovie.getMovie = response.data.movie;
        }, function (error) {
            return dataMovie.status = 'Unable to load Movie data: ' + error.message;
        });
    return dataMovie;    
}

}

app.controller('movieController', ['$scope','$routeParams', 'MovieFactory', movieController]);
app.controller('moviesController', ['$scope','MovieFactory', moviesController]);

module.exports = app; 


/*
function movieController($scope, MovieService){
  $scope.title = 'Movie Controller';
  $scope.movies = MovieService.query();;
 
}


app.controller('movieController', ['$scope','MovieService', movieController]);

module.exports = app; 
*/
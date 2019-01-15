const app = require('../app');

function movieController($scope, MovieFactory){
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


app.controller('movieController', ['$scope','MovieFactory', movieController]);

module.exports = app; 


/*
function movieController($scope, MovieService){
  $scope.title = 'Movie Controller';
  $scope.movies = MovieService.query();;
 
}


app.controller('movieController', ['$scope','MovieService', movieController]);

module.exports = app; 
*/
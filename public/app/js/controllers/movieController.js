const app = require('../app');

function movieController($scope, MovieService){
  $scope.title = 'Movie Controller';
  $scope.movies = MovieService.query();;
 
}


app.controller('movieController', ['$scope','MovieService', movieController]);

module.exports = app; 
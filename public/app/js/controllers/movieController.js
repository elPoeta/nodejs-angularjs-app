const app = require('../app');

function movieController($scope, movies){
  $scope.title = 'Movie Controller';
  $scope.movies = movies;
 
}


app.controller('movieController', ['$scope','movies', movieController]);

module.exports = app; 
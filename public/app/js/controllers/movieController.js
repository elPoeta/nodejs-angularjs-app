const app = require('../app');

function moviesController($scope, movies){
  $scope.title = 'Movies Controller';
  $scope.movies = movies;
}


app.controller('moviesController', ['$scope', 'movies', moviesController]);

module.exports = app;

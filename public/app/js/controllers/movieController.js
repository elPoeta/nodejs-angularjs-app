const app = require('../app');

function moviesController($scope, movies){
  $scope.title = 'Movies Controller';
  $scope.movies = movies;
}

function movieController($scope, movie){
  $scope.title = 'Movie Controller';
  $scope.movie = movie;
}

app.controller('moviesController', ['$scope', 'movies', moviesController]);
app.controller('movieController', ['$scope', 'movie', movieController]);

module.exports = app;

const app = require('../app');

function genresController($scope,genres){
  $scope.title = 'Genres Controller';
  $scope.genres = genres;
}

app.controller('genresController',['$scope','genres', genresController]);

module.exports = app;


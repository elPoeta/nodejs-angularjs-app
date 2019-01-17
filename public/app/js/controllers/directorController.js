const app = require('../app');

function directorsController($scope, directors){
  $scope.title = 'Directors Controller';
  $scope.directors = directors;
}

function directorController($scope,  director) {
  $scope.title = 'Director param controller';
  $scope.director = director;
}

app.controller('directorsController', ['$scope', 'directors',directorsController]);
app.controller('directorController', ['$scope','director',directorController]);

module.exports = app;



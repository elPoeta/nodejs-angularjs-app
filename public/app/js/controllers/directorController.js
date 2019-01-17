const app = require('../app');

function directorsController($scope, directors){
  $scope.title = 'Directors Controller';
  $scope.directors = directors;
}


app.controller('directorsController', ['$scope', 'directors',directorsController]);

module.exports = app;


//app.controller('directorController', ['$scope', '$routeParams','DirectorFactory',directorController]);



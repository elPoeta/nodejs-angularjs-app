const app = require('../app');

function directorController($scope, directors){
  $scope.title = 'Director Controller';
  $scope.directors = directors
 
}


app.controller('directorController', ['$scope','directors', directorController]);

module.exports = app; 
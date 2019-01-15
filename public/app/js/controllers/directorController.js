const app = require('../app');

function directorController($scope, DirectorService){
  $scope.title = 'Director Controller';
  $scope.directors = DirectorService.query();
 
}


app.controller('directorController', ['$scope','DirectorService', directorController]);

module.exports = app; 
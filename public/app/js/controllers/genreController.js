const app = require('../app');

function genreController($scope, genres){
  $scope.title = 'Genre Controller';
  $scope.genres = genres;

}


app.controller('genreController', ['$scope','genres',genreController]);

module.exports = app; 

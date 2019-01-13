const app = require('../app');

function genreController($scope, genres){
  $scope.title = 'Genre Controller';
  $scope.genres = genres;
  console.log('controller :: ');
}


app.controller('genreController', ['$scope','genres',genreController]);

module.exports = app; 

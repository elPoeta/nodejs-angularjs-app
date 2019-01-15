const app = require('../app');

function genreController($scope, GenreService){
  $scope.title = 'Genre Controller';
  $scope.genres = GenreService.query();

}


app.controller('genreController', ['$scope','GenreService',genreController]);

module.exports = app; 
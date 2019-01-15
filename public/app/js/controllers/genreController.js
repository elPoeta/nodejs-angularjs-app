const app = require('../app');

function genresController($scope, GenreFactory) {
  $scope.title = 'Genre Controller';

  $scope.genres = getGenres();


  function getGenres() {
    let dataGenres = {
      getGenres: undefined,
      status: undefined
    }

    GenreFactory.getGenres()
      .then(function (response) {
        return dataGenres.getGenres = response.data.genres;
      }, function (error) {
        return dataGenres.status = 'Unable to load Genres data: ' + error.message;
      });
    return dataGenres;
  }

}

function genreController($scope, $routeParams, GenreFactory) {
  $scope.genre = getGenre($routeParams.id);

  function getGenre(id) {
    let dataGenre = {
      getGenre: undefined,
      status: undefined
    }

    GenreFactory.getGenre(id)
      .then(function (response) {
        return dataGenre.getGenre = response.data.genre;
      }, function (error) {
        return dataGenre.status = 'Unable to load Genres data: ' + error.message;
      });
    return dataGenre;
  }

}


app.controller('genresController', ['$scope', 'GenreFactory', genresController]);
app.controller('genreController', ['$scope', '$routeParams', 'GenreFactory', genreController]);
//app.controller('genreEditController', ['$scope', 'GenreFactory', genreEditController]);

module.exports = app; 
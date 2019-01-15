const app = require('../app');

 function genreController($scope, GenreFactory){
  $scope.title = 'Genre Controller';

  $scope.genres = getGenres();

  function getGenres() {
    let dataGenres = { 
      getGenres: undefined,
      status: undefined
    }
    GenreFactory.getGenres()
        .then(function (response) {
          return  dataGenres.getGenres = response.data.genres;
        }, function (error) {
            return dataGenres.status = 'Unable to load Genres data: ' + error.message;
        });
    return dataGenres;    
}

}


app.controller('genreController', ['$scope','GenreFactory',genreController]);

module.exports = app; 
const app = require('../app');

function genresController($scope,genres){
  $scope.title = 'Genres Controller';
  $scope.genres = genres;
}

/*
genresController.resolve = {
  genres: function (GenreFactory) {
    return GenreFactory.fetchAllGenres();
  }
}

genresController.resolve = {
  genres: function (GenreFactory) {
    return GenreFactory.fetchAllGenres();
  }
}
*/
app.controller('genresController',['$scope','genres', genresController]);

module.exports = app;

/*
function genresController($scope, GenreFactory) {
  $scope.title = 'Genre Controller';
  /*
  let genres = {
    getGenres: undefined,
    status: undefined
  }

  function success(response){
    return genres.getGenres = response.data.genres;
  }
  function error(error){
    return genres.status = 'Unable to load Genres data: ' + error.message;
  }

  GenreFactory.getGenres()
      .then(success, error);
console.logresponse.data.genres;('G :: ',genres.getGenres);
  $scope.genres = genres.getGenres;


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
 
  let genres = {
    getGenres: undefined,
    status: undefined
  }
  GenreFactory.getGenres()
      .then(response =>{
        console.log('R :: ',response);
         return response.data.genres;
      })
      .then(data =>{
        console.log('D :: ',data);
       return genres.getGenres = data;
      })
      .catch(error =>{
        console.error('E :: ',error);
       return $scope.error = error;
      });
console.warn(genres.getGenres);
      $scope.genres = genres.getGenres;
}

function genreController($scope, $routeParams, GenreFactory) {
  const genre = getGenre($routeParams.id);
  $scope.genre = genre.getGenre; 
  
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
    $scope.validateGenreEdit = function (){
      console.log('validate');
        if($scope.genre.name.isEmpty() || $scope.genre.name == ' '){
          $scope.error = 'Error';
          return
        }

      $scope.gen = {
        n : $scope.genre.name,
        av : $scope.genre.available
      }  
   }
}


app.controller('genresController', ['$scope', 'GenreFactory', genresController]);
app.controller('genreController', ['$scope', '$routeParams', 'GenreFactory', genreController]);
//app.controller('genreEditController', ['$scope', 'GenreFactory', genreEditController]);

module.exports = app; 

*/
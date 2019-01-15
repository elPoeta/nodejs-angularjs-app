const app = require('../app');

function directorsController($scope, DirectorFactory){
  $scope.title = 'Director Controller';

  $scope.directors = getDirectors();
  
  function getDirectors() {
    let dataDirectors = { 
      getDirectors: undefined,
      status: undefined
    }
    DirectorFactory.getDirectors()
        .then(function (response) {
          return  dataDirectors.getDirectors = response.data.directors;
        }, function (error) {
            return dataDirectors.status = 'Unable to load Directors data: ' + error.message;
        });
    return dataDirectors;    
}

}

function directorController($scope, $routeParams, DirectorFactory){
  $scope.director = getDirector($routeParams.id);

  function getDirector(id) {
    let dataDirector = { 
      getDirector: undefined,
      status: undefined
    }
    DirectorFactory.getDirector(id)
        .then(function (response) {
          return  dataDirector.getDirector = response.data.director;
        }, function (error) {
            return dataDirector.status = 'Unable to load Director data: ' + error.message;
        });
    return dataDirector;    
  }
  

}

app.controller('directorsController', ['$scope', 'DirectorFactory',directorsController]);
app.controller('directorController', ['$scope', '$routeParams','DirectorFactory',directorController]);

module.exports = app; 


/*
function directorController($scope, DirectorService){
  $scope.title = 'Director Controller';
  $scope.directors = DirectorService.query();
 
}


app.controller('directorController', ['$scope','DirectorService', directorController]);

module.exports = app; 

*/
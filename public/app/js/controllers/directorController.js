const app = require('../app');

function directorController($scope, DirectorFactory){
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


app.controller('directorController', ['$scope','DirectorFactory',directorController]);

module.exports = app; 


/*
function directorController($scope, DirectorService){
  $scope.title = 'Director Controller';
  $scope.directors = DirectorService.query();
 
}


app.controller('directorController', ['$scope','DirectorService', directorController]);

module.exports = app; 

*/
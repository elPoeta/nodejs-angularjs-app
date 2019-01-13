const app = require('../app');

module.exports = app.controller('genreController', ['$scope',
   function genreController($scope){
     $scope.title = "This is a genre page by @elpoeta";
}]);
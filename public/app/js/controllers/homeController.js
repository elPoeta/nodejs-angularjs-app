const app = require('../app');

module.exports = app.controller('homeController', ['$scope',
   function homeController($scope){
     $scope.title = "This is a home page by @elpoeta";
}]);

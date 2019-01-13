const app = require('../app');

module.exports = app.controller('aboutController', ['$scope',
   function aboutController($scope){
     $scope.msg = "This is a about page by @elpoeta";
}]);
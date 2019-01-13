const app = require('../app');

function homeController($scope){
  $scope.title = "This is a home page by @elpoeta";
}

app.controller('homeController', ['$scope',homeController]);

module.exports = app; 


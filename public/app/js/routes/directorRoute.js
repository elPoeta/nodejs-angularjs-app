const app = require('../app');

function directorRoute($stateProvider){
    $stateProvider
    .state('directors',
    {
       url: '/movieteca/directors',
       templateUrl: './app/views/directors.html',
       controller: 'directorsController',
       resolve : {
        directors: ['DirectorFactory', function(DirectorFactory) {
             return DirectorFactory.fetchAllDirectors();
                        }]
        }      

   })
   .state('oneDirector',
   {
      url: '/movieteca/director/{id:int}',
      templateUrl: './app/views/director.html',
      controller: 'directorController',
      resolve: {
         director : ['$stateParams', 'DirectorFactory', function($stateParams, DirectorFactory){
            return DirectorFactory.fetchOneDirector($stateParams.id);
         }]
      }
   });

}

app.config(['$stateProvider', directorRoute]);

module.exports = app;
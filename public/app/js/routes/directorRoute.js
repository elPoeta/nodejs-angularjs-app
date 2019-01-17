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

   });

}

app.config(['$stateProvider',directorRoute]);

module.exports = app;
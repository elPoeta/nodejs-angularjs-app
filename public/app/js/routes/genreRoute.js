const app = require('../app');

function genreRoute($stateProvider){
    $stateProvider
    .state('genres',
    {
       url: '/movieteca/genres',
       templateUrl: './app/views/genres.html',
       controller: 'genresController',
       resolve : {
           genres: ['GenreFactory', function(GenreFactory) {
                return GenreFactory.fetchAllGenres();
                           }]
           }      
   })
   .state('genres.edit',
   {
       views: {
           content: {
               url: '/edit',
               templateUrl: './app/views/genres-edit.html',
             //  controller: 'genreEditController'
           }
       }
   });

}

app.config(['$stateProvider',genreRoute]);

module.exports = app;
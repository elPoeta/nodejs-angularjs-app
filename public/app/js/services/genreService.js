const app = require('../app');
/*
function GenreService($http, $q){
    return {
         
        fetchAllGenres: function() {
                return $http.get('api/genre')
                        .then(
                                function(response){
                                    return response.data.genres;
                                }, 
                                function(errResponse){
                                    console.error('Error while fetching Genres');
                                    return $q.reject(errResponse);
                                }
                        );
        }
};

}

app.factory('GenreService', ['$http', '$q',GenreService]);

*/
function GenreService($resource){
    return $resource('api/genre');
   
}
app.factory('GenreService', ['$resource',GenreService]);

module.exports = app; 

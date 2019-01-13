const app = require('../app');

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

module.exports = app; 

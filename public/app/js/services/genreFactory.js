const app = require('../app');

function GenreFactory($http, $q){
    const urlBase = 'api/genre';
    return {
         
        fetchAllGenres: function() {
                return $http.get(urlBase)
                        .then(
                                function(response){
                                    return response.data.genres;
                                }, 
                                function(errResponse){
                                    console.error('Error while fetching Genres');
                                    return $q.reject(errResponse);
                                }
                        );
        },
        fetchOneGenre: function(id) {
            return $http.get(`${urlBase}/${id}`)
                    .then(
                            function(response){
                                return response.data.genre;
                            }, 
                            function(errResponse){
                                console.error('Error while fetching Genres');
                                return $q.reject(errResponse);
                            }
                    );
    }
};

}
app.factory('GenreFactory', ['$http', '$q', GenreFactory]);

module.exports = app; 

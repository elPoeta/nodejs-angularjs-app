const app = require('../app');

function MovieFactory($http, $q){
    const urlBase = 'api/movie';
    return {
         
        fetchAllMovies: function() {
                return $http.get(urlBase)
                        .then(
                                function(response){
                                    return response.data.movies;
                                }, 
                                function(errResponse){
                                    console.error('Error while fetching Movies');
                                    return $q.reject(errResponse);
                                }
                        );
        },
        fetchOneMovie: function(id) {
            return $http.get(`${urlBase}/${id}`)
                    .then(
                            function(response){
                                return response.data.movie;
                            }, 
                            function(errResponse){
                                console.error('Error while fetching Movie');
                                return $q.reject(errResponse);
                            }
                    );
    }
};

}
app.factory('MovieFactory', ['$http', '$q', MovieFactory]);

module.exports = app; 
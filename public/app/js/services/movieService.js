const app = require('../app');

function MovieService($http, $q){
    return {
         
        fetchAllMovies: function() {
                return $http.get('api/movie')
                        .then(
                                function(response){
                                    return response.data.movies;
                                }, 
                                function(errResponse){
                                    console.error('Error while fetching Movies');
                                    return $q.reject(errResponse);
                                }
                        );
        }
};

}
app.factory('MovieService', ['$http', '$q', MovieService]);

module.exports = app; 

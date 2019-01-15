const app = require('../app');

function MovieFactory($http){
    const urlBase = 'api/movie';
    movieFactory = {};

    movieFactory.getMovies = function () {
        return $http.get(urlBase);
    };

    movieFactory.getMovie = function (id) {
        return $http.get(`${urlBase}/${id}`);
    };


    return movieFactory;
}

app.factory('MovieFactory', ['$http', MovieFactory]);

module.exports = app;


/*
function MovieService($resource){
    return  $resource('api/movie');
}
app.factory('MovieService', ['$resource', MovieService]);
module.exports = app;

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
*/ 

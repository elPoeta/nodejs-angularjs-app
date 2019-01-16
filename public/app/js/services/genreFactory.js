const app = require('../app');
/*
function GenreFactory($http){
    const urlBase = 'api/genre';
    genreFactory = {};

    genreFactory.getGenres = function () {
        return $http.get(urlBase);
    };

    genreFactory.getGenre = function (id) {
        return $http.get(`${urlBase}/${id}`);
    };

    return genreFactory;
}
*/

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

=========================================================

function GenreService($resource){
    return $resource('api/genre');
   
}
app.factory('GenreService', ['$resource',GenreService]);
*/


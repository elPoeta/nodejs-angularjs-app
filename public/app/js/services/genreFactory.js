const app = require('../app');

function GenreFactory($http, $q){
    const urlBase = 'api/genre';
    return {
         
        fetchAllGenres: function() {
            document.querySelector(".spin").classList.add("spinner-2");
                return $http.get(urlBase)
                        .then(
                                function(response){
                                    document.querySelector(".spin").classList.remove("spinner-2");
                                    return response.data.genres;
                                }, 
                                function(errResponse){
                                    document.querySelector(".spin").classList.remove("spinner-2");
                                    console.error('Error while fetching Genres');
                                    return $q.reject(errResponse);
                                }
                        );
        },
        fetchOneGenre: function(id) {
            document.querySelector(".spin").classList.add("spinner-2");
            return $http.get(`${urlBase}/${id}`)
                    .then(
                            function(response){
                                document.querySelector(".spin").classList.remove("spinner-2");
                                return response.data.genre;
                            }, 
                            function(errResponse){
                                document.querySelector(".spin").classList.remove("spinner-2");
                                console.error('Error while fetching Genres');
                                return $q.reject(errResponse);
                            }
                    );
    }
};

}
app.factory('GenreFactory', ['$http', '$q', GenreFactory]);

module.exports = app; 

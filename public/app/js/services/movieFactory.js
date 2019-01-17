const app = require('../app');

function MovieFactory($http, $q){
    const urlBase = 'api/movie';
    return {
         
        fetchAllMovies: function() {
            if(document.querySelector(".spin"))
            document.querySelector(".spin").classList.add("spinner-2");
                return $http.get(urlBase)
                        .then(
                                function(response){
                                    document.querySelector(".spin").classList.remove("spinner-2");
                                    return response.data.movies;
                                }, 
                                function(errResponse){
                                    document.querySelector(".spin").classList.remove("spinner-2");
                                    console.error('Error while fetching Movies');
                                    return $q.reject(errResponse);
                                }
                        );
        },
        fetchOneMovie: function(id) {
            if(document.querySelector(".spin"))
            document.querySelector(".spin").classList.add("spinner-2");
            return $http.get(`${urlBase}/${id}`)
                    .then(
                            function(response){
                                document.querySelector(".spin").classList.remove("spinner-2");
                                return response.data.movie;
                            }, 
                            function(errResponse){
                                document.querySelector(".spin").classList.remove("spinner-2");
                                console.error('Error while fetching Movie');
                                return $q.reject(errResponse);
                            }
                    );
    }
};

}
app.factory('MovieFactory', ['$http', '$q', MovieFactory]);

module.exports = app; 
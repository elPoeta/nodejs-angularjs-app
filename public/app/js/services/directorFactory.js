const app = require('../app');

function DirectorFactory($http, $q){
    const urlBase = 'api/director';
    return {
         
        fetchAllDirectors: function() {
            document.querySelector(".spin").classList.add("spinner-2");
                return $http.get(urlBase)
                        .then(
                                function(response){
                                    document.querySelector(".spin").classList.remove("spinner-2");
                                    return response.data.directors;
                                }, 
                                function(errResponse){
                                    document.querySelector(".spin").classList.remove("spinner-2");
                                    console.error('Error while fetching Directors');
                                    return $q.reject(errResponse);
                                }
                        );
        },
        fetchOneDirector: function(id) {
            document.querySelector(".spin").classList.add("spinner-2");
            return $http.get(`${urlBase}/${id}`)
                    .then(
                            function(response){
                                document.querySelector(".spin").classList.remove("spinner-2");
                                return response.data.director;
                            }, 
                            function(errResponse){
                                document.querySelector(".spin").classList.remove("spinner-2");
                                console.error('Error while fetching Director');
                                return $q.reject(errResponse);
                            }
                    );
    }
};

}
app.factory('DirectorFactory', ['$http', '$q', DirectorFactory]);

module.exports = app; 

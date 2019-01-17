const app = require('../app');

function DirectorFactory($http, $q){
    const urlBase = 'api/director';
    return {
         
        fetchAllDirectors: function() {
                return $http.get(urlBase)
                        .then(
                                function(response){
                                    return response.data.directors;
                                }, 
                                function(errResponse){
                                    console.error('Error while fetching Directors');
                                    return $q.reject(errResponse);
                                }
                        );
        },
        fetchOneDirector: function(id) {
            return $http.get(`${urlBase}/${id}`)
                    .then(
                            function(response){
                                return response.data.director;
                            }, 
                            function(errResponse){
                                console.error('Error while fetching Director');
                                return $q.reject(errResponse);
                            }
                    );
    }
};

}
app.factory('DirectorFactory', ['$http', '$q', DirectorFactory]);

module.exports = app; 

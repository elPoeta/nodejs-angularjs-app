const app = require('../app');

function DirectorService($http, $q){
    return {
         
        fetchAllDirectors: function() {
                return $http.get('api/director')
                        .then(
                                function(response){
                                    return response.data.directors;
                                }, 
                                function(errResponse){
                                    console.error('Error while fetching Directors');
                                    return $q.reject(errResponse);
                                }
                        );
        }
};

}
app.factory('DirectorService', ['$http', '$q', DirectorService]);

module.exports = app; 

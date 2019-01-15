const app = require('../app');

function DirectorFactory($http){
    const urlBase = 'api/director';
    directorFactory = {};

    directorFactory.getDirectors = function () {
        return $http.get(urlBase);
    };

    directorFactory.getDirector = function (id) {
        return $http.get(`${urlBase}/${id}`);
    };

    return directorFactory;
}

app.factory('DirectorFactory', ['$http', DirectorFactory]);

module.exports = app; 


/*
function DirectorService($resource){
    return $resource('api/director');
}

app.factory('DirectorService', ['$resource', DirectorService]);

module.exports = app; 


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
*/


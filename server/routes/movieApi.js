const movieDb = require('../db/movieDb');

module.exports = {
    name: "MovieApiPlugin",
    register: async (server, options) => {
    
      server.route([
        {
          method: "GET",
          path: "/api/movie",
          handler: async (request, h) => {

            const movies = await movieDb.findAllMovies();
            if(movies){
                return movies;
            }
            return [{}];
          }
        },
        {
          method: "GET",
          path: "/api/movie/{id}",
          handler: async (request, h) => {
            const id = request.params.id;
            if(!isNaN(id)){
                 const movie = await movieDb.findMovieById(id);
                 if(movie){
                     return movie;
                 }
                 return {};
            }
            return h.response('Bad Request').code(400);
          }
        }
     ]);
    }
}
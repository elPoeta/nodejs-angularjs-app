const genreDb = require('../db/genreDb');

module.exports = {
    name: "GenreApiPlugin",
    register: async (server, options) => {
    
      server.route([
        {
          method: "GET",
          path: "/api/genre",
          handler: async (request, h) => {

            const genres = await genreDb.findAllGenres();
            if(genres)
            {
                return genres;
            }
            return [{}];
          }
        },
        {
          method: "GET",
          path: "/api/genre/{id}",
          handler: async (request, h) => {
            const id = request.params.id;
            if(!isNaN(id)){
                 const genre = await genreDb.findGenreById(id);
                 console.log(genre);
                 if(genre){
                     return genre;
                 }
                 return {};
            }
            return h.response('Bad Request').code(400);
          }
        }
     ]);
    }
}
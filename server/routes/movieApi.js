const movieDb = require('../db/movieDb');
const Joi = require('joi');

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
            return [];
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
        },
        {
          method: "POST",
          path: "/api/movie/insert",
          config: {
            handler: async (request, h) => {
              console.log(request.payload);
                return h.response('Created').code(201);
              },
            validate: {
              payload: {
                title: Joi.string().required(),
                year: Joi.string().min(4).max(4).required(),
                poster: Joi.string().required(),
                available: Joi.boolean().required(),
                description: Joi.string().min(10),
                genreId: Joi.number().integer().required(),
                directorId: Joi.number().integer().required()
              }
            }
          }
        
        }
     ]);
    }
}
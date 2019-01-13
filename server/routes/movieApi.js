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
                return { movies };
            }
            return { movies:[] };
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
                     return { movie };
                 }
                 return { movie:{} };
            }
            return h.response('Bad Request').code(400);
          }
        },
        {
          method: "POST",
          path: "/api/movie/insert",
          config: {
            handler: async (request, h) => {
              try{
                
                const newMovie = await movieDb.insertMovie(request.payload); 
                return h.response({msg:'Created', movie: newMovie}).code(201);    
               
              }catch(error){
                 console.log('post ::  ',error);
               }
                return h.response('Not Created').code(400);
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
        
        },
        {
          method: "PUT",
          path: "/api/movie/update",
          config: {
            handler: async (request, h) => {
            //  console.log(request.payload);
            try{
                
                const updMovie = await movieDb.updateMovie(request.payload); 
                return h.response({msg:'Modified', movie: updMovie}).code(200);    
              
                }catch(error){
                 console.log('put ::  ',error);
               }
                return h.response('Not Updated').code(400);
                
              },
            validate: {
              payload: {
                id: Joi.number().integer().required(),
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
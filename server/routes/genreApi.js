const genreDb = require('../db/genreDb');
const Joi = require('joi'); 
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
            return [];
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
        },
        {
          method: "POST",
          path: "/api/genre/insert",
          config: {
            handler: async (request, h) => {
            //  console.log(request.payload);
               try{
                
                const newGenre = await genreDb.insertGenre(request.payload); 
                return h.response({msg:'Created', genre: newGenre}).code(201);    
              
                }catch(error){
                 console.log('post ::  ',error);
               }
                return h.response('Not Created').code(400);
              },
            validate: {
              payload: {
                name: Joi.string().required(),
                available: Joi.boolean().required()
              }
            }
          }
        
        }
        
     ]);
    }
}
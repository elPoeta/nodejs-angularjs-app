const directorDb = require('../db/directorDb');
const Joi = require('joi');
module.exports = {
    name: "DirectorApiPlugin",
    register: async (server, options) => {
    
      server.route([
        {
          method: "GET",
          path: "/api/director",
          handler: async (request, h) => {

            const directors = await directorDb.findAllDirectors();
            if(directors){
                return directors;
            }
            return [];
            
          }
        },
        {
          method: "GET",
          path: "/api/director/{id}",
          handler: async (request, h) => {
            const id = request.params.id;
            if(!isNaN(id)){
                 const director = await directorDb.findDirectorById(id);
                 
                 if(director){
                     return director;
                 }
                 return {};
            }
            return h.response('Bad Request').code(400);
          }
        },
        {
          method: "POST",
          path: "/api/director/insert",
          config: {
            handler: async (request, h) => {
              console.log(request.payload);
              try{
                
                const newDirector = await directorDb.insertDirector(request.payload); 
                return h.response({msg:'Created', director: newDirector}).code(201);    

               }catch(error){
                 console.log('post ::  ',error);
               }
                return h.response('Not Created').code(400);
              },
            validate: {
              payload: {
                name: Joi.string().required(),
                photo: Joi.string().required()
              }
            }
          }
        
        }
     ]);
    }
}
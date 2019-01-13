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
                return { directors };
            }
            return { directors:[] };
            
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
                     return { director };
                 }
                 return { director: {} };
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
        },
        {
          method: "PUT",
          path: "/api/director/update",
          config: {
            handler: async (request, h) => {
             console.log(request.payload);
            try{
                
                const updDirector = await directorDb.updateDirector(request.payload); 
                return h.response({msg:'Modified', director: updDirector}).code(200);    
              
                }catch(error){
                 console.log('put ::  ',error);
               }
                return h.response('Not Updated').code(400);
                
              },
            validate: {
              payload: {
                id: Joi.number().integer().required(),
                name: Joi.string().required(),
                photo: Joi.string().required()
              }
            }
          }
        }
     ]);
    }
}
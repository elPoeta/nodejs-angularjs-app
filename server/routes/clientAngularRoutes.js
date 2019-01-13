module.exports = {
    name: "ClientAngularRoutesPlugin",
    register: async (server, options) => {
    
      server.route(
        {
          method: "GET",
          path: "/movieteca/{param*}",
          handler: async (request, h) => {
            return h.file('../public/index.html');
            
          }
        }
    );
    }

  }

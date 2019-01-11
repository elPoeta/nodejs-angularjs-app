const Path = require('path');
const ConfigServer = require('./configServer');

const Server = new ConfigServer({
        port: parseInt(process.env.PORT) || 3000,
        host: process.env.HOST || '0.0.0.0',
        routes: {
                files: {
                    relativeTo: Path.join(__dirname, '../public')
                }
        },
        app: {}
});

Server.init();
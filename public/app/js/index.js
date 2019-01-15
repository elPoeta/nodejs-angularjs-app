console.log('Setup Requires');

require('./app');
require('./controllers/homeController');
require('./controllers/genreController');
require('./controllers/aboutController');
require('./controllers/directorController');
require('./controllers/movieController');

require('./services/genreFactory');
require('./services/directorFactory');
require('./services/movieFactory');
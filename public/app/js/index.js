console.log('Setup Requires');

require('./app');
require('@uirouter/angularjs');

require('./routes/homeRoute');
require('./routes/genreRoute');
require('./routes/directorRoute');
require('./routes/movieRoute');

require('./controllers/homeController');
require('./controllers/genreController');
require('./controllers/aboutController');
require('./controllers/directorController');
require('./controllers/movieController');

require('./services/genreFactory');
require('./services/directorFactory');
require('./services/movieFactory');

require('./directives/backImg');
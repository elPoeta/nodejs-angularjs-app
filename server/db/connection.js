const config = require('../config/config');
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || config.DB,
  });

module.exports = pool; 
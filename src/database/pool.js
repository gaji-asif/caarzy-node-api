const { Pool } = require('pg');
const env = require('../config/env');

const pool = new Pool({
    host: env.database.host,
    port: env.database.port,
    database: env.database.name,
    user: env.database.user,
    password: env.database.password,
});

module.exports = pool;
const Pool = require('pg').Pool;

const pool = new Pool({
  users: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'jwt'
});

module.exports = pool

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT
});

const secret = process.env.SECRET;
const saltRounds = process.env.SALTROUNDS;
const port = process.env.PORT || 6660;

module.exports = {
    pool, secret, saltRounds, port
};
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "obiwankenobi",
    host: "localhost",
    port: 5432,
    database: "microbiomicon"
});

module.exports = pool;
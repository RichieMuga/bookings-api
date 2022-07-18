const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    connectionLimit: 5,
    database: process.env.SQL_DATABASE
});

const connectdb = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        // test the database to show tables
        // const describe = await conn.query('SHOW TABLES;')
        // console.log(describe);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}



module.exports = { connectdb }
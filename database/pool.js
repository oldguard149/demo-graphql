const sql = require('mysql2/promise');

const config = {
    "mysql": {
        "host": "localhost",
        "user": "newuser",
        "password": "asdf1234*&",
        "database": "bookstore"
    }
}

const pool = sql.createPool({
    connectionLimit: 10,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,//process.env.mysql_password,
    database: config.mysql.database
});

pool.getConnection()
    .then(conn => {
        console.log("Connected to the database");
        conn.release();
    })
    .catch(err => {
        console.log(err);
        console.log("Can not connect to the database.");
    })

module.exports = pool;
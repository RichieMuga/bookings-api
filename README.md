# bookings-api

## Introduction

## Process/Steps

### create repo on github account

    open documents folder and initialize the repo

### using the MVC architecture Make the following folders

    ```

controllers,routes,errors,middleware,db, model
```

### add .env and .gitignore files

### initialize npm

    ```
    using npm init and click yes to everything
    ```

### install the following packages

    As dependancies
    ```
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-async-errors": "^3.1.1",
    "morgan": "^1.10.0"
    ```

    As dev-dependancies
    ```
    "nodemon": "^2.0.19"
    ```

### connect the database with the server using the following

    ```

const mariadb = require('mariadb');
const pool = mariadb.createPool({
host: process.env.SQL_HOST,
user: process.env.SQL_USER,
password: process.env.SQL_PASSWORD,
connectionLimit: 5, //not a must
database: process.env.SQL_DATABASE
});

```
<!-- asyncronus connection -->
```

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

```

```

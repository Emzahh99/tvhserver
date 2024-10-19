const mysql = require('mysql2');


const pool = mysql.createPool({
    host : "sql7.freesqldatabase.com",
    port : 3306,
    user : "sql7739009",
    password : "vg93KabIdE",
    database : "sql7739009",
    multipleStatements : true
})


module.exports = pool.promise();
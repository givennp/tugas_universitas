const mysql = require("mysql")
const util = require("util")
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB_NAME, MYSQL_PORT } = require("../configs/db")

const db = mysql.createPool({
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB_NAME,
    port: MYSQL_PORT,
    multipleStatements: false
});

const dbQuery = util.promisify(db.query).bind(db)

module.exports = dbQuery
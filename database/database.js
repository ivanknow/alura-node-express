const mysql = require("mysql")


module.export = () => {
    return mysql.createConnection({
        host:"localhost",
        port:3306,
        password:"password",
        database:"pet",
        user:"root"
    })
};
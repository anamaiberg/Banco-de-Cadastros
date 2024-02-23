import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bAchicha#*#",
    database: "crud",

});

db.connect();
import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "9322190090",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;


const exp = require("constants");
const express = require("express");
const fs = require ("fs");
const mysql = require ("mysql");

// create connection
const db = mysql.createConnection({
    host:"127.0.0.1",
    user: "root"
});
//connect
db.connect (err => {
    if(err) throw err;
    console.timeLog("MySql connected...");
});

//init app
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/setup", (req, res) =>{
let sql = 'CREATE DATABASE TypingtestDB';
db.query(sql, (err, result)=>{
    if (err) throw err;
    res.send("sucess");
    })
})

app.listen(3000, () => {
    console.log("server has started on port 3000");
})

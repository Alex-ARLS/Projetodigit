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
    if (err) throw err;
    console.timeLog("MySql connected")
})
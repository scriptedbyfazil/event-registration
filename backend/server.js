const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"portfolio"
});

app.post("/contact",(req,res)=>{

const {name,email,message}=req.body;

const sql="INSERT INTO messages(name,email,message) VALUES (?,?,?)";

db.query(sql,[name,email,message],(err,result)=>{
if(err) throw err;
res.send("Message stored");
});

});

app.listen(3000,()=>{
console.log("Server running");
});

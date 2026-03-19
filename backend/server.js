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

document.getElementById("registrationForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form[0].value,
    email: form[1].value
  };

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.text();
    alert(result);

    form.reset();

  } catch (error) {
    console.error(error);
    alert("Error connecting to server");
  }
});

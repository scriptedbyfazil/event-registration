const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", 
  database: "eventdb"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/register", (req, res) => {
  const { name, email, phone, ticket } = req.body;

  if (!name || !email) {
    return res.status(400).send("Name and Email are required");
  }

  const sql = "INSERT INTO users (name, email, phone, ticket) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, ticket], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send("Database error");
    }

    res.send("Registration successful");
  });
});

// Optional: Get all registrations (for testing/admin)
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error fetching users");
    }

    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

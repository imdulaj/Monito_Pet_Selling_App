const bcrypt = require("bcrypt");
const connection = require("../db/db");

// Function to register a new user
const registerUser = (req, res) => {
  const { email, password } = req.body;
 
  // Generate a salt for password hashing
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return res.status(500).send("Error generating salt");
    }

    // Hash the password using the generated salt
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        return res.status(500).send("Error hashing password");
      }

      connection.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, hash],
        (err, rows) => {
          if (err) {
            console.error("Error registering user:", err);
            return res.status(500).send("Error registering user");
          }

          res.send("User Registered Successfully");
        }
      );
    });
  });
};

// Function to get all users from the database
const getUser = (req, res) => {
  connection.query("select * from users", (err, rows) => {
    if (err) res.send(err);

    res.send(rows);
  });
};

module.exports = { registerUser, getUser };
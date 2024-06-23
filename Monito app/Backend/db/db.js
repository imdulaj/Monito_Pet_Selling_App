/** @format */

const mysql = require("mysql2");

let connection;

// Function to establish a MySQL database connection
function getConnection() {
  // Check if a connection already exists
  if (!connection) {
    // If no connection exists, create a new connection using the provided configuration
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "2001",
      database: "user",
    });
  }

  return connection;
}

module.exports = getConnection();
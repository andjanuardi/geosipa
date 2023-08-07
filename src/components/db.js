import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "f4yra",
  database: "geosipa",
});

export default db;

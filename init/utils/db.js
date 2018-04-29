const mysql = require('mysql');
const config = require('../../utils/config');
const dbConfig = config.database;

const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

const query = (sql, value) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      connection.query(sql, value, (err, rows) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(rows);
        connection.release();
      });
    });
  });
};

module.exports = { query };
/*
 * @Author: Maiduo
 * @Date: 2018-04-27 20:26:52
*/
const mysql = require("mysql");
const config = require("./config");

const database = config.database;


const pool = mysql.createPool({
  host     : database.HOST,
  user     : database.USERNAME,
  password : database.PASSWORD,
  database : database.DATABASE
});

const query = ( sql, values ) => {

  return new Promise(( resolve, reject ) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject( err );
      } else {
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err );
          } else {
            resolve( rows );
          }
          connection.release();
        })
      }
    })
  })
}

const createTable = ( sql ) => {
  return query( sql, [] )
}

const findDataById = ( table,  id ) => {
  let  _sql =  "SELECT * FROM ?? WHERE id = ? ";
  return query( _sql, [ table, id, start, end ] );
}

const findDataByPage = ( table, keys, start, end ) => {
  let  _sql =  "SELECT ?? FROM ??  LIMIT ? , ?";
  return query( _sql, [keys,  table,  start, end ] );
}


const insertData = ( table, values ) => {
  let _sql = "INSERT INTO ?? SET ?";
  return query( _sql, [ table, values ] );
}


const updateData = ( table, values, id ) => {
  let _sql = "UPDATE ?? SET ? WHERE id = ?";
  return query( _sql, [ table, values, id ] );
}


const deleteDataById = ( table, id ) => {
  let _sql = "DELETE FROM ?? WHERE id = ?";
  return query( _sql, [ table, id ] );
}


const select = ( table, keys ) => {
  let  _sql =  "SELECT ?? FROM ?? ";
  return query( _sql, [ keys, table ] );
}

const count = ( table ) => {
  let  _sql =  "SELECT COUNT(*) AS total_count FROM ?? ";
  return query( _sql, [ table ] );
}

module.exports = {
  query,
  createTable,
  findDataById,
  findDataByPage,
  deleteDataById,
  insertData,
  updateData,
  select,
  count,
}
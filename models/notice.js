/*
 * @Author: Maiduo
 * @Date: 2018-05-21 11:08:08
*/
const dbUtils = require('../utils/dbUtil');
const notice = {
  /**
   * 数据库获取所有实验列表
   * @return {object}       mysql执行结果
   */
  async getNotices ( start, rowNum, tId ) {
    let _sql1, _sql2;
    if (tId) {
      _sql1 = `SELECT * FROM notice 
      WHERE teacherId=${tId}
      ORDER BY id DESC
      LIMIT ${start} , ${rowNum}`;
      _sql2 = `SELECT * FROM notice WHERE teacherId=${tId}`;
    } else {
      _sql1 = `SELECT * FROM notice
      ORDER BY id DESC
      LIMIT ${start} , ${rowNum}`;
      _sql2 = `SELECT * FROM notice`;
    }
    const data = await dbUtils.query( _sql1  );
    const datalTotal = await dbUtils.query( _sql2  );
    return {
      data, 
      total:datalTotal.length 
    };
  },

  async create( tId, title, content, time ) {
    let _sql = `INSERT INTO erms_notice (title, content, teacher_id, create_time)
    VALUES ("${title}", "${content}", ${tId}, ${time})`;
    const data = await dbUtils.query( _sql  );
    return {
      data, 
    };
  },

  async update( id, tId, title, content, time ) {
    let _sql = `UPDATE erms_notice
    SET title="${title}", content="${content}" ,modified_time="${time}"
    WHERE id=${id}`;
    const data = await dbUtils.query( _sql  );
    return {
      data, 
    };
  },

  async remove( id ) {
    let _sql = `DELETE FROM erms_notice
    WHERE id=${id}`;
    
    const data = await dbUtils.query( _sql  );
    return {
      data, 
    };
  },
};
module.exports = notice;
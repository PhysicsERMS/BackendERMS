const dbUtils = require('../utils/dbUtil');
const allTeachers = require('../mock/allTeachers').list;

const teacher = {
  /**
   * 数据库获取所有教师列表
   * @return {object}       mysql执行结果
   */
  async getTeachers ( start, rowNum ) {
    let _sql1 = `SELECT * FROM teacher LIMIT ${start} , ${rowNum}`;
    let _sql2 = `SELECT * FROM teacher`;
    const data = await dbUtils.query( _sql1  );
    const datalTotal = await dbUtils.query( _sql2  );
    return {
      data, 
      total:datalTotal.length 
    };
  },

  /**
   * 从预约系统导入所有教师
   * @return boolearn       批量插入是否成功
   */
  async getAllTeachers () {
    const result = await dbUtils.insertData( 'erms_teacher', allTeachers);
    return result;
  },
};

module.exports = teacher;
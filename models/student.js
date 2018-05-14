const dbUtils = require('../utils/dbUtil');
const allStudents = require('../mock/allStudents').students;
const student = {

  /**
   * 根据用户名和密码查找用户
   * @param  {object} options 用户名密码对象
   * @return {object|null}         查找结果
   */
  async getOneByUserNameAndPassword( options ) {
    let _sql = `
    SELECT * from erms_student
      where password="${options.password}" and number="${options.number}"
      limit 1`;
    let result = await dbUtils.query( _sql );
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0];
    } else {
      result = null;
    }
    return result;
  },



  /**
   * 数据库获取所有学生列表
   * @return {object}       mysql执行结果
   */
  async getStudents ( start, rowNum ) {
    let _sql1 = `SELECT * FROM student LIMIT ${start} , ${rowNum}`;
    let _sql2 = `SELECT * FROM student`;
    const data = await dbUtils.query( _sql1  );
    const datalTotal = await dbUtils.query( _sql2  );
    return {
      data, 
      total:datalTotal.length 
    };
  },

  /**
   * 从预约系统导入所有学生
   * @return boolearn       批量插入是否成功
   */
  async getAllStudents () {
    const result = await dbUtils.insertData( 'erms_student', allStudents);
    return result;
  },


  

  /**
   * 老师通过实验id获取学生列表
   * @return {obj}  
   */
  async getStudentsByEId (id, start, rowNum) {
    let _sql1 = `SELECT * FROM student_sub
    WHERE experimentId = "${id}"
    LIMIT ${start} , ${rowNum}`;
    let _sql2 = `SELECT * FROM student_sub
    WHERE experimentId = "${id}"`;
    const data = await dbUtils.query( _sql1  );
    const datalTotal = await dbUtils.query( _sql2  );
    return {
      data, 
      total:datalTotal.length 
    };
  },

 
  async saveFiles (filePath, id) {
    console.log(filePath, id);
    let _sql1 = `UPDATE erms_subscribe
    SET download_url = "${filePath}" WHERE id = ${id}`;
    const result1 = await dbUtils.query( _sql1 );
    if (result1) {
      let _sql2 = `UPDATE erms_subscribe
      SET status = "1" WHERE id = ${id}`;
      const result2 = await dbUtils.query( _sql2 );
      return result2;
    } else {
      throw new Error('实验报告保存失败');
    }
  },
};

module.exports = student;
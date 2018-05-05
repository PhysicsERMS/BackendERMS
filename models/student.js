const dbUtils = require('../utils/dbUtil');
const allStudents = require('../mock/allStudents').students;
const student = {
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
    let _sql = `UPDATE erms_subscribe
    SET download_url = "${filePath}" WHERE id = ${id}`;
    const result = await dbUtils.query( _sql );
    return result;
  },
};

module.exports = student;
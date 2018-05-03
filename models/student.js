const dbUtils = require('../utils/dbUtil');
const allStudents = require('../mock/allStudents').students;
const student = {
  /**
   * 数据库获取所有学生列表
   * @return {object}       mysql执行结果
   */
  async getStudents ( start, end ) {
    const result = await dbUtils.select( 'student', start, end  );
    return result;
  },

  /**
   * 从预约系统导入所有学生
   * @return boolearn       批量插入是否成功
   */
  async getAllStudents () {
    const result = await dbUtils.insertData( 'erms_student', allStudents);
    return result;
  },
};

module.exports = student;
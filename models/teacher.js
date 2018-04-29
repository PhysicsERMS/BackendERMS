const dbUtils = require('../utils/dbUtil');

const teacher = {
  /**
   * 数据库获取所有教师列表
   * @return {object}       mysql执行结果
   */
  async getTeachers ( start, end ) {
   
    const result = await dbUtils.select( 'teacher', start, end  );
    return result;
  },
};

module.exports = teacher;
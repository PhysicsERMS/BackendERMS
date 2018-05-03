const dbUtils = require('../utils/dbUtil');
const AllExperiments = require('../mock/allExperiments').list;

const experiment = {
  /**
   * 数据库获取所有实验列表
   * @return {object}       mysql执行结果
   */
  async getExperiments ( start, end ) {
   
    const result = await dbUtils.select( 'experiment', start, end  );
    return result;
  },

  /**
   * 从预约系统导入所有实验s
   * @return boolearn       批量插入是否成功
   */
  async getAllExperiments () {
   
    const result = await dbUtils.insertData( 'erms_experiment', AllExperiments);
    return result;
  },

  /**
   * 获取学生的所有实验列表
   *@return {object}       mysql执行结果
   */
  async getMyExp (id, start, end) {
    console.log(id, start, end);
    let _sql = `
    SELECT * FROM subExper
      WHERE studentId="${id}"
      LIMIT ${start}, ${end}`;
    let result = await dbUtils.query( _sql );
    if (Array.isArray(result) && result) {
      return result;
    } else {
      return false;
    }
  },

  
};

module.exports = experiment;
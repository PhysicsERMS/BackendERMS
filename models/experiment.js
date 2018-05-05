const dbUtils = require('../utils/dbUtil');
const AllExperiments = require('../mock/allExperiments').list;

const experiment = {
  /**
   * 数据库获取所有实验列表
   * @return {object}       mysql执行结果
   */
  async getExperiments ( start, rowNum ) {
    let _sql1 = `SELECT * FROM experiment LIMIT ${start} , ${rowNum}`;
    let _sql2 = `SELECT * FROM experiment`;
    const data = await dbUtils.query( _sql1  );
    const datalTotal = await dbUtils.query( _sql2  );
    return {
      data, 
      total:datalTotal.length 
    };
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
  async getStuExp (id, start, end) {
    let _sql1 = `
    SELECT * FROM subExper
    WHERE studentId="${id}"
    LIMIT ${start}, ${end}`;
    let _sql2 = `
    SELECT * FROM subExper
    WHERE studentId="${id}"`;

    let data = await dbUtils.query( _sql1 );
    let datalTotal = await dbUtils.query( _sql2 );
    if (Array.isArray(data) && data) {
      return {
        data, 
        total:datalTotal.length 
      };
    } else {
      throw new Error('查询失败');
    }
  },

  /**
   * 获取学生的所有实验列表
   *@return {object}       mysql执行结果
   */
  async getTeaExp (id, start, rowNum) {
    let _sql1 = `
    SELECT * FROM experiment
      WHERE teacherId="${id}"
      LIMIT ${start}, ${rowNum}`;
    let _sql2 = `
    SELECT * FROM experiment
      WHERE teacherId="${id}"`;

    let data = await dbUtils.query( _sql1 );
    let datalTotal = await dbUtils.query( _sql2 );
    if (Array.isArray(data) && data) {
      return {
        data, 
        total:datalTotal.length 
      };
    } else {
      throw new Error('查询失败');
    }
  },
};

module.exports = experiment;
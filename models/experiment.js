const dbUtils = require('../utils/dbUtil');

const experiment = {
  /**
   * 数据库获取所有实验列表
   * @return {object}       mysql执行结果
   */
  async getExperiments ( start, end ) {
   
    const result = await dbUtils.select( 'experiment', start, end  );
    return result;
  },
};

module.exports = experiment;
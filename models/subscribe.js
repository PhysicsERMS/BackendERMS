/*
 * @Author: Maiduo
 * @Date: 2018-05-03 11:40:08
*/
const dbUtils = require('../utils/dbUtil');
const allSubscribes = require('../mock/allStudents').subscribes;
const subscribe = {

  /**
   * 从预约系统导入所有预约过的实验
   * @return boolearn       批量插入是否成功
   */
  async getAllSubscripions () {
    const result = await dbUtils.insertData( 'erms_subscribe', allSubscribes);
    return result;
  },
};

module.exports = subscribe;
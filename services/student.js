/*
 * @Author: Maiduo
 * @Date: 2018-04-27 20:04:21
*/
const adminModel = require('../models/admin');
const experimentModel = require('../models/experiment');
// const teacherModel = require('../models/teacher');
// const studentModel = require('../models/student');
// const subcribeModel = require('../models/subscribe');

const student = {
  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await adminModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'name': formData.name});
    return resultData;
  },

  /**
   * 获取学生实验列表
   * @return {object}          学生实验列表
   */
  async getMyExp( formData ) {
    const pageno = parseInt(formData.page.pageno );
    const rowcount = parseInt(formData.page.rowcount);
    const id = parseInt(formData.id);

    const start = pageno * rowcount - rowcount;
    const end = pageno * rowcount - 1;

    let resultData = await experimentModel.getMyExp( id, start, end );
    return resultData;
  },
};



module.exports = student;
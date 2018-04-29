/*
 * @Author: Maiduo
 * @Date: 2018-04-27 20:04:21
*/
const adminModel = require('../models/admin');
const experimentModel = require('../models/experiment');
const teacherModel = require('../models/teacher');

const admin = {
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
   * 获取所有实验列表
   * @return {object}          所有实验列表
   */
  async getExperiments( formData ) {
    const pageno = parseInt(formData.pageno );
    const rowcount = parseInt(formData.rowcount);

    const start = pageno * rowcount - rowcount;
    const end = pageno * rowcount - 1;
    let resultData = await experimentModel.getExperiments( start, end );
    return resultData;
  },


  /**
   * 获取所有教师列表
   * @return {object}          所有教师列表
   */
  async getTeachers( formData ) {
    const pageno = parseInt(formData.pageno );
    const rowcount = parseInt(formData.rowcount);

    const start = pageno * rowcount - rowcount;
    const end = pageno * rowcount - 1;
    let resultData = await teacherModel.getTeachers( start, end );
    return resultData;
  },
};

module.exports = admin;
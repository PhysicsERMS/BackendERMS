/*
 * @Author: Maiduo
 * @Date: 2018-04-27 20:04:21
*/
const experimentModel = require('../models/experiment');
const studentModel = require('../models/student');
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
    let resultData = await studentModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'number': formData.name});
    return resultData;
  },

  /**
   * 获取学生实验列表
   * @return {object}          学生实验列表
   */
  async getMyExp( formData ) {
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    
    const id = parseInt(formData.id);

    const start = current * pageSize - pageSize;
    const rowNum = pageSize;

    let resultData = await experimentModel.getStuExp( id, start, rowNum );
    return resultData;
  },

  async saveFiles (formData) {
    const filePath = formData.filePath;
    const id = parseInt(formData.id); //预约编号
    let resultData = await studentModel.saveFiles(filePath, id);
    return resultData;
  }
};



module.exports = student;
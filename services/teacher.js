/*
 * @Author: Maiduo
 * @Date: 2018-05-05 16:53:18
*/

const experimentModel = require('../models/experiment');
const studentModel = require('../models/student');
const teacherModel = require('../models/teacher');
// const studentModel = require('../models/student');
// const subcribeModel = require('../models/subscribe');

const student = {
  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await teacherModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'nick': formData.name});
    return resultData;
  },

  /**
   * 获取老师实验列表
   * @return {object}          老师实验列表
   */
  async getMyExp( formData ) {
    console.log(formData);
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    const id = parseInt(formData.id);

    const start = current * pageSize - pageSize;
    const rowNum = pageSize;

    let resultData = await experimentModel.getTeaExp( id, start, rowNum );
    return resultData;
  },


  async getStudentsByEId( formData ) {
    console.log(formData);
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    const id = parseInt(formData.id);

    const start = current * pageSize - pageSize;
    const rowNum = pageSize;

    let resultData = await studentModel.getStudentsByEId( id, start, rowNum );
    return resultData;
  },



  async saveFileAndScore (formData) {
    const filePath = formData.filePath;
    const id = parseInt(formData.id);
    const preScore = parseInt(formData.preScore);
    const score = parseInt(formData.score);
    const operateScore = parseInt(formData.operateScore);
    let resultData = await teacherModel.saveFileAndScore(filePath, id, preScore, score, operateScore);
    return resultData;
  }
};



module.exports = student;
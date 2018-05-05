/*
 * @Author: Maiduo
 * @Date: 2018-04-27 20:04:21
*/
const adminModel = require('../models/admin');
const experimentModel = require('../models/experiment');
const teacherModel = require('../models/teacher');
const studentModel = require('../models/student');
const subcribeModel = require('../models/subscribe');

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
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    const start = current * pageSize - pageSize;
    const rowNum = pageSize;

    let resultData = await experimentModel.getExperiments( start, rowNum );
    return resultData;
  },


  /**
   * 获取所有教师列表
   * @return {object}          所有教师列表
   */
  async getTeachers( formData ) {
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    const start = current * pageSize - pageSize;
    const rowNum = pageSize;
    
    let resultData = await teacherModel.getTeachers( start,rowNum );
    return resultData;
  },

  /**
   * 获取所有学生列表
   * @return {object}          所有学生列表
   */
  async getStudents( formData ) {
    const current = parseInt(formData.page.current );
    const pageSize = parseInt(formData.page.pageSize);
    const start = current * pageSize - pageSize;
    const rowNum = pageSize;
    let resultData = await studentModel.getStudents( start, rowNum );
    return resultData;
  },
  /**
   * 从预约系统导入所有学生
   * @return boolearn          操作是否成功
   */
  async getAllStudents() {
    let resultData = await studentModel.getAllStudents().then(async () => {
      let resultData2 = await subcribeModel.getAllSubscripions();
      return resultData2;
    });
    return resultData;
  },

  /**
   * 从预约系统导入所有预约实验
   * @return boolearn          操作是否成功
   */
  async getAllSubscripions() {
    let resultData = await subcribeModel.getAllSubscripions();
    return resultData;
  },

  /**
   * 从预约系统导入所有教师
   * @return boolearn          操作是否成功
   */
  async getAllTeachers() {
    let resultData = await teacherModel.getAllTeachers();
    return resultData;
  },

  /**
   * 从预约系统导入所有实验
   * @return boolearn          操作是否成功
   */
  async getAllExperiments() {
    let resultData = await experimentModel.getAllExperiments();
    return resultData;
  },
};



module.exports = admin;
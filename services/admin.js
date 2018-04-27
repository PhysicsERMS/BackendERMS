/*
 * @Author: Maiduo
 * @Date: 2018-04-27 20:04:21
*/
const adminModel = require('../models/admin');

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
    return resultData
  },
}

module.exports = admin;
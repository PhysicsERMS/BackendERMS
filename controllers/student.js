/*
 * @Author: Maiduo
 * @Date: 2018-04-27 19:29:43
*/
const studentService = require('../services/student');
const MSG = require('../utils/message');

module.exports = {
  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
  async signIn ( ctx ) {
    let formData = ctx.request.body;
    const result = {
      msg: '',
      data: {},
      code: 0
    };

    const userResult = await studentService.signIn( formData );
    if ( userResult ) {
      if ( formData.name === userResult.name ) {
        result.msg = MSG.SUCCESS;
        result.code = 200;
      } else {
        result.msg = MSG.USER_NAME_OR_PASSWORD_ERROR;
      }
    } else {
      result.msg = MSG.USER_NO_EXIST;
    }

    if ( formData.source === 'form' && result.code === 200 ) {
      let session = ctx.session;
      session.isLogin = true;
      session.userName = userResult.name;
      session.userId = userResult.id;
      ctx.redirect('/admin/home');
    } else {
      ctx.body = result;
    }
  },

  /**
   * 获取实验列表
   * @param   {obejct} ctx 上下文对象
   */
  async getMyExp ( ctx ) {
    let formData = ctx.request.body;
    const result = {
      msg: '',
      data: {},
      code: 0,
      page: {
        pagenum: formData.page.pageno,
        pageSize: formData.page.rowcount,
        orderby: {},
        total: 0
      }
    };
    const Result = await studentService.getMyExp( formData );
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
      result.data = Result;
      result.page.total = Result.length;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },
};
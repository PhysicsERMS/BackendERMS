/*
 * @Author: Maiduo
 * @Date: 2018-05-05 16:49:38
*/
const teacherService = require('../services/teacher');
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

    const userResult = await teacherService.signIn( formData );
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
        current: formData.page.current,
        pageSize: formData.page.pageSize,
        orderby: {},
        total: 0
      }
    };
    const Result = await teacherService.getMyExp( formData );
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
      result.data = Result.data;
      result.page.total = Result.total;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },
  async getStudentsByEId ( ctx ) {
    let formData = ctx.request.body;
    const result = {
      msg: '',
      data: {},
      code: 0,
      page: {
        current: formData.page.current,
        pageSize: formData.page.pageSize,
        orderby: {},
        total: 0
      }
    };
    const Result = await teacherService.getStudentsByEId( formData );
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
      result.data = Result.data;
      result.page.total = Result.total;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },
  
};
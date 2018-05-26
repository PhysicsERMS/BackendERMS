/*
 * @Author: Maiduo
 * @Date: 2018-05-21 10:53:32
*/
const noticeService = require('../services/notice');
const MSG = require('../utils/message');

module.exports = {
  /**
   * 获取通知列表
   * @param   {obejct} ctx 上下文对象
   */
  async getNotices ( ctx ) {
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
    const Result = await noticeService.getNotices( formData );
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

  async create ( ctx ) {
    let formData = ctx.request.body;
    const result = {
      msg: '',
      data: {},
      code: 0,
    };
    const Result = await noticeService.create( formData );
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },

  async update ( ctx ) {
    let formData = ctx.request.body;
    const result = {
      msg: '',
      data: {},
      code: 0,
    };
    const Result = await noticeService.update( formData );
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },

  async remove ( ctx ) {
    let formData = ctx.request.body;
    const result = {
      msg: '',
      data: {},
      code: 0,
    };
    const Result = await noticeService.remove( formData );
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },
};
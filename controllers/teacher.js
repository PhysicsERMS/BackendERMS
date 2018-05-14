/*
 * @Author: Maiduo
 * @Date: 2018-05-05 16:49:38
*/
const path = require('path');
const fs = require('fs');
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
      if ( formData.name === userResult.nick ) {
        result.msg = MSG.SUCCESS;
        result.code = 200;
        result.data = {
          id: userResult.id,
          name: userResult.name,
          nick: userResult.nick,
          phone: userResult.phone,
          email: userResult.email,
          office: userResult.office,
        };
      } else {
        result.msg = MSG.USER_NAME_OR_PASSWORD_ERROR;
      }
    } else {
      result.msg = MSG.USER_NO_EXIST;
    }

    if ( formData.source === 'form' && result.code === 200 ) {
      let session = ctx.session;
      session.isLogin = true;
      session.user = result.data;
    }
    ctx.body = result;
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

  async copyFiles (ctx) { // 上传文件
    const file = ctx.request.body.files.file;
    let filePath = path.join('public/mark/', Date.now()+'-'+file.name);

    let stream = fs.createWriteStream(filePath); //创建一个可写流
    fs.createReadStream(file.path).pipe(stream);

    fs.unlink(file.path, (err) => {
      if(err) {
        throw new Error('临时目录文件删除失败');
      }
    });

    filePath = filePath.replace(/public\\mark\\/g, 'mark/');
    filePath = `http://${ctx.request.host}/${filePath}`;

    ctx.body = {
      filePath,
    };
  },
  async saveFileAndScore (ctx) { // 保存文件URL到数据库
    const result = {
      msg: '',
      code: 0,
    };
    const formData = ctx.request.body;
    const Result = await teacherService.saveFileAndScore(formData);
    if (Result) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
      ctx.body = result;
    }
  },
  
};
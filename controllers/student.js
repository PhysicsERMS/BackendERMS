/*
 * @Author: Maiduo
 * @Date: 2018-04-27 19:29:43
*/
const fs = require('fs');
const path = require('path');
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
      if ( formData.name === userResult.number.toString() ) {
        result.msg = MSG.SUCCESS;
        result.code = 200;
        result.data = {
          id: userResult.id,
          number: userResult.number,
          name: userResult.name,
          college: userResult.college,
          class: userResult.class,
          phone: userResult.phone,
          email: userResult.email,
        };
      } else {
        result.msg = MSG.USER_NAME_OR_PASSWORD_ERROR;
      }
    } else {
      result.msg = MSG.USER_NO_EXIST;
    }

    if ( result.code === 200 ) {
      let session = ctx.session;
      session.isLogin = true;
      session.user = result.data;
      session.name = userResult.name;
      session.num = userResult.number;
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
    const Result = await studentService.getMyExp( formData );
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
    let filePath = path.join('public/report/', Date.now()+file.name);

    let stream = fs.createWriteStream(filePath); //创建一个可写流
    fs.createReadStream(file.path).pipe(stream);

    fs.unlink(file.path, (err) => {
      if(err) {
        throw new Error('临时目录文件删除失败');
      }
    });

    filePath = filePath.replace(/public\\report\\/g, 'report/');
    filePath = `http://${ctx.request.host}/${filePath}`;

    ctx.body = {
      filePath,
    };
  },
  async saveFiles (ctx) { // 保存文件URL到数据库
    const result = {
      msg: '',
      code: 0,
    };
    const formData = ctx.request.body;
    const Result = await studentService.saveFiles(formData);
    if (Result) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
      ctx.body = result;
    }
  }, 
};
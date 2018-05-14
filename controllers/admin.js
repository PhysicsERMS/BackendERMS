/*
 * @Author: Maiduo
 * @Date: 2018-04-27 19:29:43
*/
const adminService = require('../services/admin');
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

    const userResult = await adminService.signIn( formData );
    if ( userResult ) {
      if ( formData.name === userResult.name ) {
        result.msg = MSG.SUCCESS;
        result.code = 200;
        result.data = {
          id: userResult.id,
          name: userResult.name,
          phone: userResult.phone,
          email: userResult.email,
        };
      } else {
        result.msg = MSG.USER_NAME_OR_PASSWORD_ERROR;
      }
    } else {
      result.msg = MSG.USER_NAME_OR_PASSWORD_ERROR;
    }
    if (result.code === 200 ) {
      let session = ctx.session;
      session.isLogin = true;
      session.userName = userResult.name;
      session.userId = userResult.id;
    } 
    ctx.body = result;
  },

  /**
   * 获取实验列表
   * @param   {obejct} ctx 上下文对象
   */
  async getExperiments ( ctx ) {
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
    const Result = await adminService.getExperiments( formData );
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

  /**
   * 获取老师列表
   * @param   {obejct} ctx 上下文对象
   */
  async getTeachers ( ctx ) {
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
    const Result = await adminService.getTeachers( formData );
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

  /**
   * 获取学生列表
   * @param   {obejct} ctx 上下文对象
   */
  async getStudents ( ctx ) {
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
    const Result = await adminService.getStudents( formData );
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

  /**
   * 从预约系统导入所有学生
   * @param   {obejct} ctx 上下文对象
   */
  async getAllStudents( ctx ) {
    const result = {
      msg: '',
      code: 0
    };
    const Result = await adminService.getAllStudents();
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },

  /**
   * 从预约系统导入所有教师
   * @param   {obejct} ctx 上下文对象
   */
  async getAllTeachers( ctx ) {
    const result = {
      msg: '',
      code: 0
    };
    const Result = await adminService.getAllTeachers();
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  },

  /**
   * 从预约系统导入所有实验
   * @param   {obejct} ctx 上下文对象
   */
  async getAllExperiments( ctx ) {
    const result = {
      msg: '',
      code: 0
    };
    const Result = await adminService.getAllExperiments();
    if ( Result ) {
      result.msg = MSG.SUCCESS;
      result.code = 200;
    } else {
      result.msg = MSG.ERROR_SYS;
    }
    ctx.body = result;
  }
  
  /**
   * 注册操作
   * @param   {obejct} ctx 上下文对象
   */
  // async signUp( ctx ) {
  //   let formData = ctx.request.body;
  //   let result = {
  //     success: false,
  //     message: '',
  //     data: null
  //   };

  //   let validateResult = adminService.validatorSignUp( formData );

  //   if ( validateResult.success === false ) {
  //     result = validateResult;
  //     ctx.body = result;
  //     return;
  //   }

  //   let existOne  = await adminService.getExistOne(formData);

  //   if ( existOne  ) {
  //     if ( existOne.name === formData.userName ) {
  //       result.msg = 'FAIL_USER_NAME_IS_EXIST';
  //       ctx.body = result;
  //       return;
  //     }
  //     if ( existOne .email === formData.email ) {
  //       result.message = 'FAIL_EMAIL_IS_EXIST';
  //       ctx.body = result;
  //       return;
  //     }
  //   }


  //   let userResult = await adminService.create({
  //     email: formData.email,
  //     password: formData.password,
  //     name: formData.userName,
  //     create_time: new Date().getTime(),
  //     level: 1,
  //   });

  

  //   if ( userResult && userResult.insertId * 1 > 0) {
  //     result.success = true;
  //   } else {
  //     result.msg = 'ERROR_SYS';
  //   }

  //   ctx.body = result;
  // },
};
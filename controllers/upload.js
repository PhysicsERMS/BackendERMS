const path = require('path');
const fs = require('fs');
const studentService = require('../services/student');
const MSG = require('../utils/message');
module.exports = {

  async copyFiles (ctx) { // 上传文件
    const file = ctx.request.body.files.file;
    let filePath = path.join('public/uploads/', Date.now()+file.name);

    let stream = fs.createWriteStream(filePath); //创建一个可写流
    fs.createReadStream(file.path).pipe(stream);

    fs.unlink(file.path, (err) => {
      if(err) {
        throw new Error('临时目录文件删除失败');
      }
    });

    filePath = filePath.replace(/public\\uploads\\/g, '');
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
  
  async getFile(ctx) {
    let result = '文件加载失败';
    result = fs.readFileSync(path.join(__dirname, '..', decodeURI(ctx.url)), 'binary');
    ctx.body  = result;
  }
};
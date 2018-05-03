const path = require('path');
const fs = require('fs');
module.exports = {
  async moveFiles (ctx) {
    const file = ctx.request.body.files.file;
    let filePath = path.join('public/uploads/', Date.now()+file.name);

    let stream = fs.createWriteStream(filePath); //创建一个可写流
    fs.createReadStream(file.path).pipe(stream);

    fs.unlink(file.path, (err) => {
      if(err) {
        throw new Error('临时目录文件删除失败');
      }
    });
    filePath = filePath.replace(/\\/g, '/');
    ctx.request.body.files.file.path = `${ctx.request.host}/${filePath}`;
    ctx.body = ctx.request.body;
  }, 
  
  async getFile(ctx) {
    let result = '文件加载失败';
    result = fs.readFileSync(path.join(__dirname, '..', decodeURI(ctx.url)), 'binary');
    ctx.body  = result;
  }
};
const router = require('koa-router')();
const multer = require('koa-multer');
const uploadController = require('../controllers/upload');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/tmp-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage: storage });
router.post('/upload', upload.single('avatar'), uploadController.copyFiles);//上传文件
router.post('/upload/save', uploadController.saveFiles); //保存文件URL导数据库
router.get('/uploads/:name', uploadController.getFile);

module.exports = router;

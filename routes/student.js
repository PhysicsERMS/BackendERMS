const Router = require('koa-router');
const multer = require('koa-multer');
const student = require('../controllers/student');
const router = new Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/tmp-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });
router.post('/public/report', upload.single('avatar'), student.copyFiles);//上传文件
router.post('/public/save', student.saveFiles); //保存文件URL导数据库

router.post('/login', student.signIn);

//router.post('/home', admin.getExperiments);
router.post('/myExperiments', student.getMyExp);

module.exports = router;
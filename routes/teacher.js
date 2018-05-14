const Router = require('koa-router');
const multer = require('koa-multer');
const teacher = require('../controllers/teacher');
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

router.post('/public/mark', upload.single('avatar'), teacher.copyFiles);//上传文件
router.post('/public/save', teacher.saveFileAndScore); //保存文件URL导数据库
router.post('/login', teacher.signIn);
router.post('/getExperiments',teacher.getMyExp );
router.post('/getStudentsByEId',teacher.getStudentsByEId );

module.exports = router;
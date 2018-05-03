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
router.post('/upload', upload.single('avatar'), uploadController.moveFiles);
router.get('/uploads/:name', uploadController.getFile);

module.exports = router;

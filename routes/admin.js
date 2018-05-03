const Router = require('koa-router');
const admin = require('../controllers/admin');


const router = new Router();

router.post('/login', admin.signIn);
// 从预约系统导入数据
router.post('/mock/getAllExperiments', admin.getAllExperiments);
router.post('/mock/getAllTeachers', admin.getAllTeachers);
router.post('/mock/getAllStudents', admin.getAllStudents);
// 获取所有列表
router.post('/getExperiments', admin.getExperiments);
router.post('/getTeachers', admin.getTeachers);
router.post('/getStudents', admin.getStudents);

module.exports = router;
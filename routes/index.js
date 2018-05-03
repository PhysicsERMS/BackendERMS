/**
 * 整合所有子路由
 */

const Router = require('koa-router');
const user = require('./users');
const teacher = require('./teacher');
const student = require('./student');
const admin = require('./admin');
const upload = require('./upload');

const router = new Router();


router.use('/users', user.routes(), user.allowedMethods());
router.use('/teacher', teacher.routes(), teacher.allowedMethods());
router.use('/student', student.routes(), student.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());

router.use('/public', upload.routes(), upload.allowedMethods());

module.exports = router;
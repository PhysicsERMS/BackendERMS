/**
 * 整合所有子路由
 */

const Router = require('koa-router');
const teacher = require('./teacher');
const student = require('./student');
const admin = require('./admin');
const notice = require('./notice');

const router = new Router();



router.use('/teacher', teacher.routes(), teacher.allowedMethods());
router.use('/student', student.routes(), student.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/notice', notice.routes(), notice.allowedMethods());

module.exports = router;
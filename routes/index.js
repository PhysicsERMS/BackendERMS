/**
 * 整合所有子路由
 */

const Router = require('koa-router');
const user = require('./users');
const teacher = require('./teacher');
const admin = require('./admin');

const router = new Router();


router.use('/users', user.routes(), user.allowedMethods());
router.use('/teacher', teacher.routes(), teacher.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());

module.exports = router;
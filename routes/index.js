/**
 * 整合所有子路由
 */

const router = require('koa-router')();

const user = require('./users');

router.use('/users', user.routes(), user.allowedMethods());

module.exports = router;
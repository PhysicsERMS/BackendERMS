const Router = require('koa-router');
const admin = require('../controllers/admin');

const router = new Router();

router.post('/login', admin.signIn);

module.exports = router;
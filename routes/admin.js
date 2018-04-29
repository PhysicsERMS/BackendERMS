const Router = require('koa-router');
const admin = require('../controllers/admin');

const router = new Router();

router.post('/login', admin.signIn);
router.post('/getExperiments', admin.getExperiments);
router.post('/getTeachers', admin.getTeachers);

module.exports = router;
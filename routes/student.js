const Router = require('koa-router');
const student = require('../controllers/student');


const router = new Router();

router.post('/login', student.signIn);

//router.post('/home', admin.getExperiments);
router.post('/myExperiments', student.getMyExp);

module.exports = router;
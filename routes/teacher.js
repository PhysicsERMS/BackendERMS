const Router = require('koa-router');
const teacher = require('../controllers/teacher');
const router = new Router();


router.post('/getExperiments',teacher.getMyExp );
router.post('/getStudentsByEId',teacher.getStudentsByEId );

module.exports = router;
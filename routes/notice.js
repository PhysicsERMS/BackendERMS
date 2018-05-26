const Router = require('koa-router');
const notice = require('../controllers/notice');


const router = new Router();

router.post('/getNotices', notice.getNotices);
router.post('/create', notice.create);
router.post('/update', notice.update);
router.post('/remove', notice.remove);
module.exports = router;
const router = require('koa-router')();

router.get('/', async (ctx) => {
  ctx.body = 2;
});

module.exports = router;

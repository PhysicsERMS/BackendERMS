const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  ctx.body = 2;
});

module.exports = router;

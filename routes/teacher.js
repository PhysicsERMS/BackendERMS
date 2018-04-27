const Router = require('koa-router');
const router = new Router();

router.get('/getStudents',  async (ctx, next) => {
	 ctx.body = [
		{
			id: 3,
			name: 'a'
		},
		{
			id: 22,
			name: 'qw'
		}
	];
})

module.exports = router;
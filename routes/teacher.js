const router = require('koa-router')();

router.prefix('/teacher');

router.get('/getStudents', function *(ctx, next) {
	 this.body = [
		{
			id: 1,
			name: 'q'
		},
		{
			id: 2,
			name: 'w'
		}
	];
})

module.exports = router;
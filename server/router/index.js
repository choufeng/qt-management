const KoaRouter = require('koa-router')
const KoaBody = require('koa-body') // post解析参数并支持附件上传

const router = new KoaRouter()

const user = require('./user.js')

router.get('/api/user/info', user.info)
	.post('/api/login', user.login)

module.exports = function useRoutes(app) {
	app.use(KoaBody({
		multipart: true, // 支持文件上传
	}))
	app.use(router.routes())
	app.use(router.allowedMethods())
}
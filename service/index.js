const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const { connect, initSchemas } = require('./database/db.js')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const user = require('./appApi/user')
const goods = require('./appApi/goods')
    // 装载所有子路由
const router = new Router()
router.use('/user', user.routes())
router.use('/goods', goods.routes())
// 加载路由中间件
app.use(bodyParser())
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

//立即执行函数
;
(async() => {
    await connect()
    initSchemas()
    // const User = mongoose.model('User')
    // let oneUser = new User({
    //     userName: 'kawhai',
    //     password: '123456555'
    // })
    // oneUser.save().then(() => {
    //     console.log('插入成功')
    // })

})()

app.use(async(ctx) => {
    ctx.body = "hello world"
})

app.listen(3000, () => {
    console.log('服务启动成功')
})
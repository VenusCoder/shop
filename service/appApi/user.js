const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()

router.get('/', async(ctx) => {
    ctx.body = "这是用户首页接口"
})

router.post('/register', async(ctx) => {
    console.log(ctx.request.body)
    const User = mongoose.model('User')
    const newUser = new User(ctx.request.body)
    await newUser.save()
    .then(res => {
      ctx.body = {
        status: 200,
        message: '恭喜你注册成功'
      }
      
    })
    .catch(err => {
      ctx.body = {
        status: 500,
        message: err
      }
    })
})

router.post('/login', async(ctx) => {
  let loginUser = ctx.request.body
  console.log(loginUser)
  const userName = loginUser.userName
  const password = loginUser.password
  // 引入User的model
  const User = mongoose.model('User')
  await User.findOne({userName: userName}).exec()
  .then(async(res) => {
    console.log(res)
    if(res) {
      let newUser = new User()
      await newUser.comparePassword(password, res.password)
      .then(isMatch => {
        ctx.body = {
          status: 200,
          message: isMatch
        }
        console.log(isMatch)
      })
      .catch(err => {
        ctx.body = {
          status: 500,
          message: err
        }
      })
    }else {
      ctx.body = {
        status: 500,
        message: '用户名不存在'
      }
    }
  })
  .catch(err => {
    ctx.body = {
      status:500,
      message: err
    }
  })
})

module.exports = router
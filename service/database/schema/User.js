// const mongoose = require('mongoose') //引入Mongoose
// const Schema = mongoose.Schema //声明Schema
// let ObjectId = Schema.Types.ObjectId //声明Object类型

// //创建我们的用户Schema
// const userSchema = new Schema({
//     UserId: ObjectId,
//     userName: { unique: true, type: String },
//     password: String,
//     createAt: { type: Date, default: Date.now() },
//     lastLoginAt: { type: Date, default: Date.now() }

// })

// //发布模型

// mongoose.set('useCreateIndex', true)
// mongoose.model('User', userSchema)
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = mongoose.Schema({
    userId: {
        type: String
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    loginAt: {
        type: Date,
        default: +new Date()
    },
    loginOut: {
        type: Date,
        default: Date.now()
    }
})

userSchema.pre('save', function(next) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    })
})

userSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if(!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}
// 发布模型
mongoose.model('User', userSchema)
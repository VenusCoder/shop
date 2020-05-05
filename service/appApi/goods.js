const Router = require('koa-router')
const mongoose = require('mongoose')
const fs = require('fs')
const router = new Router()


//插入商品详情数据库
router.get('/detail', async(ctx) => {
  fs.readFile('./data_json/newGoods.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    let saveCount = 0 
    // 引入goods model
    const Goods = mongoose.model('Goods')
    data.map((item, index) => {
      let newGoods = new Goods(item)
      newGoods.save()
      .then(() => {
        saveCount++
        console.log('成功插入' + saveCount)
      })
      .catch(err => {
        console.log(err)
      })
    })
  })
  ctx.body = '开始商品详情导入数据'
})
// 插入大分类数据
router.get('/category', async ctx => {
  fs.readFile('./data_json/category.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    let saveCount = 0
    let Category = mongoose.model('Category')
    data.RECORDS.map((item, index) => {
      
      let newCategory = new Category(item)
      newCategory.save()
      .then(() => {
        saveCount++ 
        console.log('插入成功' + saveCount)
      })
      .catch(err => {
        console.log(err)
      })
    })
  })
 
})

// 插入小分类数据

router.get('/categorysub', async ctx => {
  fs.readFile('./data_json/category_Sub.json', 'utf8', (err, data) => {
    data = JSON.parse(data)
    let saveCount = 0
    let CategorySub = mongoose.model('CategorySub')
    data.RECORDS.map((item, index) => {
      
      let newCategorySub = new CategorySub(item)
      newCategorySub.save()
      .then(() => {
        saveCount++ 
        console.log('插入成功' + saveCount)
      })
      .catch(err => {
        console.log(err)
      })
    })
  })
  ctx.body = '开始插入分类sub数据'
})


// 商品详情接口
router.post('/goodsDetail', async ctx => {
  let goodsId = ctx.request.body.goodsId
  const Goods = mongoose.model('Goods')
  await Goods.findOne({
    ID: goodsId
  })
  .exec() 
  .then(async(res) => {
    ctx.body = {
      status: 200,
      message: res
    }
  })
  .catch(err => {
    ctx.body = {
      status: 500,
      message: err
    }
  })
  
})

// 商品大分类接口
router.get('/getCategory', async ctx => {
  // let goodsId = ctx.request.body.goodsId
  const Category = mongoose.model('Category')
  await Category.find()
  .exec() 
  .then(async(res) => {
    ctx.body = {
      status: 200,
      message: res
      
    }
  })
  .catch(err => {
    ctx.body = {
      status: 500,
      message: err
    }
  })
  
})

// 商品小分类接口
router.post('/getCategorySub', async ctx => {
  let categoryId = ctx.request.body.categoryId
  
  const CategorySub = mongoose.model('CategorySub')
  await CategorySub.find({
    MALL_CATEGORY_ID: categoryId
  })
  .exec() 
  .then(async(res) => {
    ctx.body = {
      status: 200,
      message: res
    }
  })
  .catch(err => {
    ctx.body = {
      status: 500,
      message: err
    }
  })
  
})

// 商品类别获取商品列表（商品详情）
router.post('/getGoodsListByCategorySubId', async ctx => {
  let categorySubId = ctx.request.body.categorySubId
  let   page = ctx.request.body.page
  let   num = 10
  let   start = (page-1)*num

  // let categorySubId = '2c9f6c946016ea9b016016f79c8e0000'
  const Goods = mongoose.model('Goods')
  await Goods.find({
    SUB_ID: categorySubId
  })
  .skip(start).limit(num) 
  .exec()
  .then(async(res) => {
    ctx.body = {
      status: 200,
      message: res
    }
  })
  .catch(err => {
    ctx.body = {
      status: 500,
      message: err
    }
  })
  
})

module.exports = router
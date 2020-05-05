const mongoose = require('mongoose')
const categorySchemaSub = mongoose.Schema({
  ID: {
    type: String,
    require: true
  },
  MALL_CATEGORY_ID: {
    type: String
  },
  MALL_SUB_NAME: {
    type: String
  },
  COMMENTS: String,
  SORT: Number
  
})

mongoose.model('CategorySub', categorySchemaSub)
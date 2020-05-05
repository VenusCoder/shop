const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
  ID: {
    type: String,
    require: true
  },
  MALL_CATEGORY_NAME: {
    type: String
  },
  IMAGE: {
    type: String
  },
  TYPE: Number,
  SORT: Number,
  COMMENTS: String
})

mongoose.model('Category', categorySchema)
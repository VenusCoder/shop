import request from "./index";

export function getCategoryList() {
  return request({
    url: '/goods/getCategory',
    baseURL: 'http://localhost:3000',
    method: 'get'
  })
}


export function getCategorySub(categoryId) {
  return request({
    url: '/goods/getCategorySub',
    baseURL: 'http://localhost:3000',
    method: 'post',
    data: {
      categoryId
    }
  })
}
// 得到小类商品信息
export function getCategorySubId(categorySubId, page) {
  return request({
    url: '/goods/getGoodsListByCategorySubId',
    baseURL: 'http://localhost:3000',
    method: 'post',
    data: {
      categorySubId,
      page
    }
  })
}
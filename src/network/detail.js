import request from "./index"

export function getGoodsDetail(goodsId) {
  return request({
    url: '/goods/goodsDetail',
    baseURL: 'http://localhost:3000',
    method: 'post',
    data: {
      goodsId
    }
  })
}
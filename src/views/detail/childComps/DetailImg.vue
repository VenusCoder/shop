<template>
  <div class="detail-img">
    <div class="detail-img-one">
      <img :src="detailImg" alt="" width="100%">
      <p>{{goodsInfo.NAME}} <span>(￥{{goodsInfo.ORI_PRICE | price() }})</span></p>
    </div>
    <div>
      <van-tabs swipeable sticky>
        <van-tab title="商品详情">
          <div class="detail-content" v-html="goodsInfo.DETAIL"></div>
        </van-tab>
        <van-tab title="商品评价">

        </van-tab>
      </van-tabs>
    </div>
    
  </div>
</template>

<script>
import { toPrice } from "common/utils"
export default {
  props: {
    detailImg: {
      type: String,
      default() {
        return ''
      }
    },
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    price(price) {
      return toPrice(price)
    }
  },
 
}
</script>

<style scoped>
  .detail-img-one{
    text-align: center;
  }
  .detail-img-one span {
    color: #e5017d;
    font-size: 16px;
  }
  .detail-content {
    font-size: 0;
  }
 
</style>
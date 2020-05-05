<template>
  <div class="goods">
    <h2>
      商品推荐
    </h2>
  
  <div class="recommend-goods">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in goods" :key="index">
        <div class="recommend-item">
        <img :src="item.image" alt="" width="60%" class="img">
        <h3>{{ item.goodsName }}</h3>
        <p>￥{{item.price | priceFilter }} (￥{{item.mallPrice | priceFilter }})</p>
        </div>
       
      </swiper-slide>
    </swiper>
  </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  
  import { toPrice } from "common/utils.js"
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView:3
      }
    }
    
  },
  filters: {
    priceFilter(price) {
      return toPrice(price)
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    background: #f4f4f4;
  }
  .goods h2 {
    font-size: 16px;
    height: 2.4rem;
    line-height: 2.4rem;
    padding-top: .4rem;
    padding-left: .3rem;
    color: #e5017d;
  }
  .recommend-goods h3 {
    font-size: 12px;
    font-weight: normal;
    color: #666;
  }
  .img {
    display: block;
    margin: 0 auto;
  }
  .recommend-item {
    width: 99%;
    border-right: 1px solid #eee;
  }
  .recommend-item p{
    font-size: 12px;
    color: #333;
  }
</style>
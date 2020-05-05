<template>
  <div class="hot-goods">
    <h2>
      热卖商品
    </h2>
     <van-list class="list">
      <van-row gutter="20">
        <van-col span="12" v-for="(item, index) in hotGoods" :key="index" >
          <hot-goods-item :product="item"></hot-goods-item>
        </van-col>
      </van-row>
      </van-list>
   
  </div>
</template>

<script>
  import HotGoodsItem from "components/content/goods/HotGoodsItem"
  
export default {
  components: {
    HotGoodsItem
  },
  props: {
    hotGoods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.list {
  overflow: hidden;
}
.hot-goods h2 {
    font-size: 16px;
    height: 2.4rem;
    line-height: 2.4rem;
    padding-top: .4rem;
    padding-left: .3rem;
    color: #e5017d;
    text-align: center;
  }
</style>
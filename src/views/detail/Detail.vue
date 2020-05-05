<template>
  <div class="detail">
    <van-nav-bar left-text="返回" title="商品详情" left-arrow @left-click="onClickLeft" />
    <!-- <ul>
      <li v-for="(item ,index) in $store.state.cartList" :key="index">{{item}}</li>
    </ul> -->

    <detail-img :detail-img="topImage" :goods-info="message" />
    <detail-bottom-bar  @addCart="addCart"/>
    
  </div>
</template>

<script>
import { getGoodsDetail } from "network/detail.js";
import { Toast } from "vant";
import DetailImg from "views/detail/childComps/DetailImg";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar"
export default {
  components: {
    DetailImg,
    DetailBottomBar
  },
  data() {
    return {
      goodsId: "",
      message: {},
      topImage: ""
    };
  },
  created() {
    this.goodsId = this.$route.params.goodsId
      ? this.$route.params.goodsId
      : this.$route.query.goodsId;
    console.log(this.goodsId);
    this.getGoodsDetail(this.goodsId);
  },
  methods: {
    getGoodsDetail(goodsId) {
      getGoodsDetail(goodsId).then(res => {
        console.log(res);
        this.message = res.data.message;
        // console.log(this.message)
        this.topImage = this.message.IMAGE1;
      });
    },
    onClickLeft() {
      this.$router.back()
    },
    addCart() {
      // 获取购物车要展示的信息
      let product = {}
      product.image = this.topImage
      product.name = this.message.NAME
      product.price = this.message.ORI_PRICE
      product.count = this.message.SALES_COUNT
      product.id = this.message.ID
      //将商品信息添加到vuex中
      this.$store.dispatch('addCartList', product)
    }
  }
};
</script>

<style scoped>
  .detail {
    position: relative;
    overflow: hidden;
    z-index: 6;
  }
</style>
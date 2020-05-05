<template>
  <div class="right-content">
    <div class="right-content-item" @click="goGoodsDetail">
      <div class="content-img">
        <img :src="product.IMAGE1" :onerror="errorImg" alt width="80%" />
      </div>
      <div class="content-text">
        <h3>{{product.NAME}}</h3>
        <p>￥{{product.ORI_PRICE}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // goodList: [],

      errorImg: 'this.src="' + require("@/assets/img/erro.png") + '"'
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    //跳转到商品详情页
    goGoodsDetail(id) {
      this.$router.push("/detail/" + this.product.ID);
    }
  },
  mounted() {
    // let winHeight = document.documentElement.clientHeight;
    // document.getElementsByClassName('right-centent')[0].style[height] = winHeight -90 + 'px'
    // console.log(document.getElementsByClassName('right-centent'))
    // console.log(this.$refs.contentList)
    // console.log(this.winHeight)
    // this.$refs.contentList.$el.style.height = winHeight - 90 + "px";
  }
};
</script>

<style scoped>
.right-centent {
  overflow: scroll;
}
.right-content-item {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eee;
}
.content-img {
  width: 50%;
}
.content-text {
  width: 50%;
}
.content-text h3 {
  font-size: 0.9rem;
  font-weight: normal;
  color: #999;
}
.content-text p {
  font-size: 0.8rem;
  color: #666;
  color: #e5017d;
}
</style>
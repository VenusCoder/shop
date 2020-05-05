<template>
  <div class="detail-bottom">
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="addToCart"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
      <!-- <div>
        <van-button size="normal" type="primary">直接购买</van-button>
      </div>
      <div>
        <van-button size="normal" type="danger" @click="addToCart">加入购车</van-button>
      </div> -->
    </div>
</template>

<script>
import { Toast } from "vant"
export default {
  methods: {
     addToCart() {
    this.$emit('addCart')
    Toast('加入成功');
  },
   onClickIcon() {
    this.$router.push('/cart')
  },
  onClickButton() {
      Toast('点击按钮');
    }
  },
 

}
</script>

<style scoped>
 .detail-bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.detail-bottom > div {
  border-radius: 20%;
  padding: 0 0.8rem;
}
</style>
<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img  v-lazy="item.image" alt="" width="100%">
      </van-swipe-item>
      
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
  
};
</script>

<style scoped>
  .swiper {
    max-height: 15rem;
    overflow: hidden;
    clear: both;
  }
</style>
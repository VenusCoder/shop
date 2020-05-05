<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" active-color="#e5017d" inactive-color="#000" @change="onChange">
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="bag-o">分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o">会员</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      currentPath: ''
    };
  },
   methods: {
    onChange(active) {
      switch(active) {
        case 0 : 
          this.$router.push('/home')
          break;
        case 1: 
          this.$router.push('/category')
          break;
        case 2:
          this.$router.push('/cart')
          break;
        case 3: 
          this.$router.push('/profile')
      }

    },
    created() {
      this.changePath()
    },
    updated() {
      this.changePath()
    },
    changePath() {
      this.currentPath = this.$route.path
      if(this.currentPath == '/cart') {
        this.active = 2
      }
    }
  },
}
</script>

<style>

</style>
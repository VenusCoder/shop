<template>
  <div class="right-nav">
    <van-tabs v-model="active"  @click="clickTopTitle">
      <van-tab v-for="(item, index) in topList" :key="index" :title="item.MALL_SUB_NAME"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, //激活标签的值
      currentIndex: 0
    };
  },
  props: {
    topList: {
      type: Array,
      default() {
        return [];
      }
    },
    
   
  },
  methods: {
    clickTopTitle(index, active) {
      // this.finished = false;
      // console.log(index) 可以打印出来
      // this.page = 1;
      // this.$bus.$emit('getGoodsSubId')
      // this.currentIndex = index
      // this.categorySubId = this.topList[index].ID
     
      this.$emit("categorySubTop", index, this.active);
    }
  },
  created() {
    // this.$bus.$on('changeAction', this.itemAction)
  },
  mounted() {
    // console.log('categorySubId :'+ this.topList[index].ID)
    // console.log(this.topList)
    // console.log(this.$refs.content.$el.offsetTop)
    // this.itemAction = ()=> {
    //   this.active =0
    // }
  }
};
</script>

<style scoped>
.right-nav {
  font-size: 0.8rem;
  text-align: center;
}
.right-content {
  overflow: scroll;
}
</style>
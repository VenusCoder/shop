<template>
  <div class="right-first">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading"  :finished="finished" @load="onLoad">
       
          <category-sub-content-item v-for="(item, index) in goodsList" :product="item"></category-sub-content-item>
       
      </van-list>
    </van-pull-refresh>

    
  </div>
</template>

<script>
import CategorySubContentItem from "./CategorySubContentItem";
export default {
  components: {
    CategorySubContentItem
  },
  data() {
    return {
      finished: false,
      loading: false,
      refreshing: false //是否下拉刷新
      // goodList: [],
    };
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    //上拉加载更多
    onLoad(loading, finished) {
     setTimeout(() => {
      
       
        this.$emit('loadeMore', loading, finished)
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if(this.goodsList.length>100) {
          this.finished = false
        }
      }, 1000);
      //  this.loading = false
      
        
     
    },
    // 下拉刷新
    onRefresh() {
     setTimeout(() => {
        this.refreshing = false,
      this.finished =false,
     
      this.goodList = []
       this.page = 1
        this.loading = true
      this.onLoad()
     }, 500)
    },
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight;
    document.getElementsByClassName("right-first")[0].style.height =
      winHeight - 90 + "px";
    // this.$bus.$on('getGoodsSubId', (index) => {
    //   this.categorySubId = this.topList[index].ID
    //   this.goodList = []
    //   this.page = 1
    //   this.onLoad()

    // })
  }
};
</script>

<style scoped>
  .right-first {
    overflow: scroll;
  }
</style>
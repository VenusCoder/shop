<template>
  <div class="tab-menu">
    <div class="left-nav">
              <ul>
                <li v-for="(item, index) in leftList" :key="index" 
                :class="{ active: currentIndex == index }" 
                @click="itemClick(index, item.ID)">
                  {{ item.MALL_CATEGORY_NAME }}
                </li>
              </ul>
    </div>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
    return {
      currentIndex: 0,
     
      loading: false,
      finished: false,
     
     

    }
    
  },
  props: {
    leftList: {
      type: Array,
      default() {
        return []
      }
    },
    categorySub: {
      type: Array,
      default() {
        return []
      }
    },
   
  },
  methods: {
    itemClick(index,ID) {
      this.currentIndex = index
     console.log(this.currentIndex)
      this.$bus.$emit('changeActive', )
      this.$emit('leftMenuClick', index, ID)
    // console.log(index) 可以打印出来
      // this.finished = false
    },
    
   
  },
  mounted() {
   
    // document.getElementsByClassName("right-content")[0].style.height = winHeight - 90 + 'px'
  }
}
</script>

<style scoped>
  .tab-menu {
    /* height: 100%; */
    background: #f3f3f3;
  }
  .left-nav {
    text-align: center;
   
  }
  .left-nav ul li{
    font-size: .8rem;
    height: 2.8rem;
    line-height: 2.8rem;
  }
  .active {
    color: #e5017d;
    background: #fff;
  }
  
</style>
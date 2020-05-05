<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index">
      <img v-lazy="item.image" alt="" class="image">
      <span>{{item.mallCategoryName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getStyle(index) {
      return 'width:100%'
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: 1rem 0;
  }
  .recommend img {
    width: 60%;
   display: block;
    margin: 0 auto;
  }
  .recommend > div {
    flex: 1;
  }
  
  .recommend span {
    font-size: 10px;
    display: block;
    text-align: center;
  }
</style>
<template>
  <div class="search">
    <van-row>
      <van-col span="3">
        <img :src="search" alt="" width="60%">
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input"></input>
      </van-col>
      <van-col span="5">
        <van-button size="mini">搜索</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {

  data() {
    return {
      search: require('assets/img/搜索.png')
    }
  }
};
</script>

<style scoped>
  .search {
    height: 2.6rem;
    line-height: 2.6rem;
    background: #e5017d;
    overflow: hidden;
  }
  .search .search-input {
    height: 2.1rem;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #fff;
    color: #fff;
    background: #e5017d;
  }
  .search img {
    padding: 0.6rem 0.3rem;
  }
</style>
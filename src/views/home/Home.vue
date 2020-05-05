<template>
  <div id="home">
    <search></search>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="category"></recommend-view>
    <img v-lazy="adBanner" alt="" width="100%">
    <goods :goods="goods" />
    <food :foodData="floor1" :foodTitle="foodName.floor1"/>
    <food :foodData="floor2" :foodTitle="foodName.floor2"/>
    <food :foodData="floor3" :foodTitle="foodName.floor3"/>
    <hot-goods :hot-goods="hotGoods"></hot-goods>
  </div>
</template>

<script>
  import Search from "components/common/search/Search"
  import Swiper from "components/common/swiper/Swiper"
  import Goods from "components/content/goods/Goods"
  import Food from "components/content/food/Food"
  import HotGoods from "components/content/goods/HotGoods" 

  import RecommendView from "views/home/childComps/RecommendView"

  import { getHomeData } from "network/home"
export default {
  components: {
    Search,
    Swiper,
    RecommendView,
    Goods,
    Food,
    HotGoods,
  },
  data() {
    return {
      category: [],
      banners: [],
      adBanner: [],
      goods: [],
      foodName: {},
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: [],
    }
  },
  created() {
   
      this.getHomeData()
   
   
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        console.log(res)
        this.category = res.data.data.category
        this.banners = res.data.data.slides
        this.adBanner = res.data.data.advertesPicture.PICTURE_ADDRESS
        this.goods = res.data.data.recommend
        this.foodName = res.data.data.floorName
        this.floor1 = res.data.data.floor1
        this.floor2 = res.data.data.floor2
        this.floor3 = res.data.data.floor3
        this.hotGoods = res.data.data.hotGoods
      })
    }
  }
}
</script>

<style>

</style>
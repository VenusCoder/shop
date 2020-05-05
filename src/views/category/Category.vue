<template>
  <div class="category">
    <van-nav-bar title="商品分类" />
    <van-row>
      <van-col span="6">
        <left-menu :left-list="leftList" @leftMenuClick="leftMenuClick" ref="leftMenu" />
      </van-col>
      <van-col span="18">
        <category-sub :top-list="topList" @categorySubTop="categorySubTop" />
        <!--上面小分类-->
        <category-sub-content :goods-list="goodsList" ref="contentList" />
      </van-col>
    </van-row>

    <!--       
        <tab-menu :message="message" :category-sub="categorySub"
        @subItemClick="subItemClick" 
        @loadMore="loadMore"
        @categorySubItem="categorySubItem"
         :goods-list="goodsList" />
    -->
  </div>
</template>

<script>
import {
  getCategoryList,
  getCategorySub,
  getCategorySubId
} from "network/category";

import { Toast } from "vant";
import LeftMenu from "./childComps/LeftMenu";
import CategorySub from "./childComps/CategorySub";
import CategorySubContent from "./childComps/CategorySubContent";
export default {
  components: {
    LeftMenu,
    CategorySub,
    CategorySubContent
  },
  data() {
    return {
      leftList: [], //左侧大分类
      topList: [], // 上侧小分类，相当于categorySub
      active: 0,

      // finished: false,
      // loading: false,
      page: 1, //商品列表页数
      goodsList: [], //商品列表信息
      categoryId: "", //小分类的Id
      categorySubId: "", //商品子类id
      categoryIdNum: "",
      categorySubIdNum: ""
    };
  },
  created() {
    this.getCategoryList(); // 获取大分类标题数据
    this.getCategorySub(1); //获取小分类标题数据

    // this.loadMore()
    this.getCategorySubId("2c9f6c946016ea9b016016f79c8e0000");
  },
  mounted() {
    let winHeight = document.documentElement.clientHeight;
    this.$refs.contentList.$el.style.height = winHeight - 90 + "px";
    this.$refs.leftMenu.$el.style.height = winHeight - 46 + "px";
    console.log(this.$refs.contentList.$el.style.height);
  },

  methods: {
    //请求大类数据
    getCategoryList() {
      getCategoryList()
        .then(res => {
          console.log(res); //可以获取到大类标题
          this.leftList = res.data.message;
          // this.categoryIdNum = this.leftList[0].ID //第一个大分类ID
          //  this.categoryId = this.leftList[index].ID
          console.log(this.leftList[0].ID);
        })
        .catch(err => {
          Toast("服务器请求数据失败");
        });
    },

    //获取小分类标题数据
    getCategorySub(categoryId) {
      // this.currentIndex = index
      getCategorySub(categoryId)
        .then(res => {
          console.log(res); //可以获取到小类分类标题
          this.topList = res.data.message;
          console.log(this.topList);
          // this.categoryId = this.topList[0].ID //热带水果id

          // this.categorySubId = this.topList[index].ID
          this.categorySubIdNum = res.data.message[0].ID; //第一个小分类ID  index:1(2c9f6c94608ff843016095163b8c0177)
        })
        .catch(err => {
          console.log(err);
        });
    },
    //商品列表图片文字价格数据
    getCategorySubId(categorySubId) {
      let page = 1;
      getCategorySubId(categorySubId, page)
        .then(res => {
          console.log(res);

          if (res.data.status == 200 && res.data.message.length) {
            this.goodsList.push(...res.data.message);

            this.page += 1;

            console.log(this.goodsList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击左侧大分类方法
    leftMenuClick(index, categoryId) {
      // console.log(index) 可以打印出来

      this.page = 1;
      this.finished = false;

      this.goodsList = [];
      switch (index) {
        case 0:
          this.getCategorySubId("2c9f6c946016ea9b016016f79c8e0000");
          break;
        case 1:
          this.getCategorySubId("2c9f6c9460337d540160337fefd60000");
          break;
        case 2:
          this.getCategorySubId("2c9f6c946016f86f01601709335d0000");
        case 3:
          this.getCategorySubId("2c9f6c94621970a801626a35cb4d0175");
          break;
        case 4:
          this.getCategorySubId("2c9f6c9460a03c0c0160a041ab1d0000");
          break;
      }

      //  this.categoryId = this.categoryId? this.categoryId : this.topList[0].MALL_CATEGORY_ID
      //   console.log(index)
      this.categoryId = this.leftList[index].ID;
      console.log(this.categoryId);
      this.getCategorySub(categoryId);

      console.log(this.categorySubId);

      // this.getCategorySubId(this.categoryId)
      console.log(this.goodsList);
      // this.loadMore()
    },

    // 点击上侧小分类的方法
    categorySubTop(index, active) {
      console.log(index);
      this.page = 1;
      this.goodsList = [];
      this.categorySubId = this.topList[index].ID;
      //  console.log(this.categorySubId) // 美国车厘子id: 2c9f6c946016ea9b016016f79c8e0000  2c9f6c946016ea9b016016f79c8e0000
      this.getCategorySubId(this.categorySubId);
      console.log(this.topList[0].ID);
      this.goodsList = JSON.parse(JSON.stringify(this.goodsList));
      console.log(this.goodsList);
    }
    //  loadMore() {

    //       this.categorySubId = this.categorySubId ? this.categorySubId : this.topList[0].ID
    //       //  this.categorySubId = this.topList[index].ID
    //       // console.log(this.topList[0].ID)
    //       console.log(this.topList)
    //      console.log(this.categorySubId) // 美国车厘子id: 2c9f6c946016ea9b016016f79c8e0000  2c9f6c946016ea9b016016f79c8e0000
    //     this.getCategorySubId(this.categorySubId);

    //   },
  }
};
</script>

<style scoped>
.category {
  height: 100%;
}
</style>
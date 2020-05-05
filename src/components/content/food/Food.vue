<template>
  <div class="foods">
    <div class="food-title">{{ foodTitle }}</div>
    <div class="food-first">
      
      <div class="food-one">
        <img v-lazy="foodData0.image" alt="" width="100%" />
      </div>

      <div class="food-two">
        <img v-lazy="foodData1.image"  alt="" width="100%" />
        <img v-lazy="foodData2.image"  alt="" width="100%" />
      </div>
    </div>
    <div class="food-second">
      <div class="food-item" v-for="(item, index) in foodData.slice(1)">
        <img v-lazy="item.image" alt="" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foodData: {
      type: Array,
      default() {
        return [];
      }
    },
    foodTitle: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
       foodData0: {},
       foodData1: {},
       foodData2: {}
    }
  },
  watch: {
    foodData(val) {
     
       this.foodData0 = this.foodData[0]
        this.foodData1 = this.foodData[1]
        this.foodData2 = this.foodData[2]
    }
  },
 
};
</script>

<style scoped>
.foods {
  width:100%;
}
.food-title {
  font-size: 16px;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  color: rgb(63, 63, 63);
  background: #f3f3f3;
}
.food-first {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.food-one {
  width: 100%;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
      height: 10.75rem;
    overflow: hidden;
}
.food-two {
  width: 100%;
  
  box-sizing: border-box;
}
.food-two img{
 
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.food-second {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.food-item {
  width: 10rem;
  
}
.food-item img{
  display: block;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}

</style>
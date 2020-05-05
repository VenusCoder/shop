<template>
  <div id="app">
   <keep-alive>
<router-view/>
   </keep-alive>
    
    <tab-bar />
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
export default {
  components: {
   TabBar
  }
}
</script>
<style>

</style>

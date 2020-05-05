<template>
  <div class="profile-trait">
    <van-grid>
      <van-grid-item>
         <img src="~/assets/img/profile/兑换记录.png" width="60%"/>
      <p> 每日签到</p>
      </van-grid-item>
      <van-grid-item >
         <img src="~/assets/img/profile/我的收藏.png" width="60%"/>
         <p>我的收藏</p>
      </van-grid-item>
      <van-grid-item >
         <img src="~/assets/img/profile/兑换记录.png" width="60%"/>
         <p>兑换记录</p>
      </van-grid-item>
      <van-grid-item >
         <img src="~/assets/img/profile/我的积分.png" width="60%"/>
         <p>我的积分</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-trait p{
  font-size: .7rem;
}
</style>
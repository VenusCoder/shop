<template>
  <div class="profile">
    <van-nav-bar title="个人中心" left-text="返回" left-arrow @click-left="onClickLeft" />
    <avatar />
    <profile-trait />
     <profile-detail />
  </div>
</template>

<script>
import Avatar from "./childComps/Avatar";
import ProfileTrait from "./childComps/ProfileTrait"
import ProfileDetail from "./childComps/ProfileDetail";
export default {
  components: {
    Avatar,
    ProfileDetail,
    ProfileTrait
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style>
</style>
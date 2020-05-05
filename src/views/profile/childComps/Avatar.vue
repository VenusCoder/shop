<template>
  <div class="avatar">
    <div class="avatar-head">
      <img src="~/assets/img/avatar.jpeg" alt width="100%" />
    </div>
    <div class="avatar-dec">
      <h2>{{name}}</h2>
      <p>
        <em>{{tag[0]}}</em>
        <em>{{tag[1]}}</em>
        <em>{{tag[2]}}</em>
      </p>
    </div>
   
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      name: "许她画里成妆",
      tag: ["美食家", "摄影", "游戏玩家"]
    };
  }
};
</script>

<style scoped>
.avatar {
  height: 6rem;
  line-height: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background: #f3f3f3;
}
.avatar-head {
  height: 4rem;
  line-height: 8rem;
}
.avatar-head img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid #ddd;
}
.avatar-dec {
  margin: 0 0.8rem;
}
.avatar-dec h2 {
  font-size: 0.9rem;
  font-weight: normal;
  color: #e5017d;
  padding-top: 0.8rem;
  margin: 0;
}
.avatar-dec p {
  width: 16rem;
  margin: 0;
}
.avatar-dec em {
  width: 3.8rem;
  font-size: 0.6rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: 3rem;
  background: rgb(138, 97, 254);
  margin: 0 0.3rem 0 0;
  font-weight: normal;
  color: #fff;
  font-style: normal;
  display: inline-block;
  text-align: center;
}
.avatar-dec em:nth-last-of-type(2) {
  background: rgb(210, 217, 255);
}

.avatar-dec em:nth-last-of-type(3) {
  background: rgb(255, 114, 52);
}
</style>
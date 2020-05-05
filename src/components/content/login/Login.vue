<template>
  <div class="register">
    <van-nav-bar title="用户登录" left-text="返回" left-arrow @click-left="clickLeft" />
    <div class="register-user">
      <van-field
        v-model="userName"
        icon="clear"
        label="用户名"
        placeholder="请输入用户名"
        @click-icon="userName=''"
        :error-message="userNameErro"
        required
      />
    </div>
    <div class="register-reg">
      <van-field
        v-model="password"
        icon="clear"
        type="password"
        label="密码"
        placeholder="请输入密码"
        @click-icon="password=''"
        :error-message="passwordErro"
        required
      />
    </div>
    <div class="register-butoon">
      <van-button type="primary" size="large" @click="loginAction" :loading="openLoading">点击登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from "network/login.js"
import { Toast } from "vant"
export default {
  data() {
    return {
      userName: '',
      password: '',
      openLoading: false,
      userNameErro: '',
      passwordErro: ''
    };
  },
  created() {
    if(localStorage.userInfo) {
      Toast.success('您已经登录了')
      this.$router.push('/')
    }
  },
  methods: {
    clickLeft() {
      this.$router.back();
    },
    loginAction(){
      this.checkForm() && this.loginUser()
    },
    loginUser() {
      this.openLoading = true,
      login(this.userName, this.password)
      .then(res => {
        console.log(res)
        if(res.data.status ==200 && res.data.message) {
          new Promise((resolve, reject) => {
            localStorage.userInfo = {
              userName: this.userName
            }
            setTimeout(() => {
              resolve()
            }, 500)
          })
          .then(() => {
            Toast.success('登陆成功')
            this.$router.push('/')
          })
          .catch(err => {
            Toast.fail('登录失败')
            console.log(err)
            this.openLoading = false
          })
        }
      })
      .catch(err => {
         Toast.fail('登录失败')
            console.log(err)
            this.openLoading = false
      })
    },
    checkForm() {
      let isOk =true
      if(this.userName.length < 3) {
       
        this.userNameErro = '用户名不少于3位数'
         isOk = false
      }else {
        this.userNameErro = ''
      }
      if(this.password.length < 6) {
        
        this.passwordErro = '密码不少于6位数'
        isOk = false
      }else {
        this.passwordErro = ''
      }
      return isOk
    }
  }
};
</script>

<style scoped>
  .register {
    height: 100vh;
    background: #f3f3f3
  }
  .register-user {
    width: 99%;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    margin-top: 2rem;
    background: #f3f3f3;
    padding-bottom: .5rem;
  }
  .register-reg {
    width: 99%;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    /* margin-top: .2rem; */
    background: #f3f3f3;
    padding-bottom: .5rem;
  }
</style>
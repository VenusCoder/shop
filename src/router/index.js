import Vue from 'vue'
import VueRouter from 'vue-router'
import { loginUser } from '../network/login'
import { Tabbar } from 'vant'

const Home = () => import ('../views/home/Home.vue')
const Register = () => import ('../components/content/register/Register.vue')
const Login = () => import('components/content/login/Login')
const Detail = () => import('views/detail/Detail')
const Category =() => import('views/category/Category')
const Cart = () => import('views/cart/Cart')

const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
   
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail/:goodsId',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
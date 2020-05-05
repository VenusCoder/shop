import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'assets/css/resetVui.css'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, NavBar, Field,Tabs, Tab, PullRefresh,Tabbar, 
  TabbarItem, Stepper, Icon, Grid, GridItem, image, GoodsAction, GoodsActionIcon, GoodsActionButton
} from 'vant'

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(NavBar).use(Field)
.use(Tabs).use(Tab).use(PullRefresh).use(Tabbar).use(TabbarItem).use(Stepper).use(Icon).use(Grid).use(GridItem)
.use(image).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
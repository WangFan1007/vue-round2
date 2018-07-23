import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

var router = new VueRouter({
    routes:[
        {path:'/home', component:HomeContainer},
        {path:'/member', component:MemberContainer},
        {path:'/shopcar', component:ShopCarContainer},
        {path:'/search', component:SearchContainer},
    ],
    linkActiveClass:'mui-active',
    linkExactActiveClass:''
})

export default router
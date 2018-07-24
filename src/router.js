import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:{name:'home'}},
        {path:'/home',name:'home', component:HomeContainer},
        {path:'/member', component:MemberContainer},
        {path:'/shopcar', component:ShopCarContainer},
        {path:'/search', component:SearchContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
    ],
    linkActiveClass:'mui-active',
    linkExactActiveClass:''
})

export default router
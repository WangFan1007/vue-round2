<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media"
            v-for="item in newsList" :key="item.id"
        >
            <router-link :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.imageUrls ? item.imageUrls[0]:defalutImg ">
                <div class="mui-media-body">
                    <h1>{{ item.title }}</h1>
                    <p class="mui-ellipsis">
                        <span>发表时间：{{item.publishDateStr | dateFormat }}</span>
                        <span>点击：0 次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            newsList:[],
            defalutImg:'https://avatars3.githubusercontent.com/u/10457381?s=40&v=4'
        }
    },
    methods:{
        getnewsList(){
            this.$http.get('newslist')
            .then(res=>{
                console.log(res)
                this.newsList = res.body.data
            })
        }
    },
    created(){
        this.getnewsList()
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击： 次</span>
        </p>
        <hr>
        <div class="content">

        </div>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,
            }
        },
        methods:{
            getNewsInfo(){
                this.$http.get('newsinfo').then(
                    (res)=>{
                        console.log(res)
                    }
                )
            }
        },
        components: {
            'comment-box': comment
        }
    }
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        padding: 15px 0;
        text-align: center;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{}
}
</style>